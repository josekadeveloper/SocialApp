import React from "react";
import { Container, Grid, GridColumn, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logomini.PNG";
import RightHeader from "./RightHeader";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
        <Container>
            <Grid>
                <GridColumn width={3} className="header_logo">
                    <Link to={"/"}>
                        <Image src={Logo} alt="SocialApp" />
                    </Link>
                </GridColumn>
                <GridColumn width={10}>
                    <p>Buscador</p>
                </GridColumn>
                <GridColumn width={3}>
                    <RightHeader />
                </GridColumn>
            </Grid>
        </Container>
    </div>
  )
}
