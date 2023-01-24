import React from "react";
// import { Container } from "@chakra-ui/react";
import styles from "./navbar.module.css";
import { Flex, Text,Spacer } from '@chakra-ui/react'

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.upperNav}>
        <Flex fontSize={11} bgColor={"red"} w={300}  letterSpacing={1}>
          <Text>Offers</Text>
          <Spacer/>
          <Text>Fanbook</Text>
          <Spacer/>
          <Text>Download App</Text>
          <Spacer/>
          <Text>TriBe Membership</Text>
        </Flex>
        <Flex  fontSize={11} bgColor={"red"} w={200}  letterSpacing={1}>
          <Text>Contact Us</Text>
          <Text>Track Order</Text>
        </Flex>
      </div>
    </nav>
  );
  //   <Container h={"50px"} maxW={"100%"} border={"1px solid"}></Container>
};
