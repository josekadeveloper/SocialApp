import React from "react";
import { Grid, GridColumn, Image } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../gql/user";
import ImageNoFound from "../../assets/images/avatar.png";
import UserNotFound from "../UserNotFound";
import "./Profile.scss";

export default function Profile(props) {
    const { username } = props;
    const { data, loading, error } = useQuery(GET_USER, {
        variables: { username }
    });

    if (loading) return null;
    if (error) return <UserNotFound />;

    const { getUser } = data;

    return (
        <>
            <Grid className="profile">
                <GridColumn width={5} className="profile_left">
                    <Image src={ImageNoFound} avatar />
                </GridColumn>
                <GridColumn width={11} className="profile_right">
                    <div>HeaderProfile</div>
                    <div>Followers</div>
                    <div className="other">
                        <p className="name">{getUser.name}</p>
                        {getUser.siteWeb && (
                            <a href={getUser.siteWeb} className="siteWeb" target="_blank">
                                {getUser.siteWeb}
                            </a>
                        )}
                        {getUser.description && (
                            <p className="description">{getUser.description}</p>
                        )}
                    </div>
                </GridColumn>
            </Grid>
        </>
    )
}
