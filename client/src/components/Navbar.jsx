import React from "react";
// import { Container } from "@chakra-ui/react";
import styles from "../styles/navbar.module.css";
import { Flex, Box,Spacer } from '@chakra-ui/react'

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.upperNav}>
        <Flex fontSize={11} bgColor={"red"} w={300}  letterSpacing={1}>
          <Box>Offers</Box>
          <Spacer/>
          <Box>Fanbook</Box>
          <Spacer/>
          <Box>Download App</Box>
          <Spacer/>
          <Box>TriBe Membership</Box>
        </Flex>
      </div>
    </nav>
  );
  //   <Container h={"50px"} maxW={"100%"} border={"1px solid"}></Container>
};
