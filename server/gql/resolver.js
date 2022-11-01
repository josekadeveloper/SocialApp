const User = require("../models/user");
const bcryptjs = require("bcryptjs");

const resolvers = {
    Query: {
        // User
        getUser: () => {
            console.log("Obteniendo usuario");
            return null;
        }
    },
    Mutation: {
        // User
        register: async (_, { input }) => {
            const newUser = input;
            newUser.email = newUser.email.toLowerCase();
            newUser.username = newUser.email.toLowerCase();

            const { email, username, password } = newUser;

            // Revisamos si el email ya está en uso
            const foundEmail = await User.findOne({ email });
            if (foundEmail) throw new Error("El email ya está en uso");

            // Revisamos si el username ya está en uso
            const foundUsername = await User.findOne({ username });
            if (foundUsername) throw new Error("El nombre de usuario ya está en uso");

            // Encriptar password
            const salt = await bcryptjs.genSaltSync(10);
            newUser.password = await bcryptjs.hash(password, salt);

            try {
                const user = new User(newUser);
                user.save();
                return user;
            } catch (error) {
                console.log(error);
            }

            return input;
        }
    },
}

module.exports = resolvers;