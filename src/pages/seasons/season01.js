/* chakra content */
import { Button, Flex, Img, Text, Box, Link } from "@chakra-ui/react"; /* */

import React from "react";

/* t02 */
import T02 from "./trabalhos/linespace";

import { motion } from "framer-motion";

import Card1 from "./animationcard";

import T01 from "./trabalhos/ubisoft";

import T03 from "./trabalhos/youtubemusic";

/* Popover */

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

export default function S01() {
  return (
    <>
      {/* Top Blue Bar */}
      <Flex
        _hover={{
          bg: "#053C8F",
        }}
        align={"center"}
        justify={"center"}
        h="60px"
        bg="#146EF5"
        w="100%"
      >
        <Flex w="1300px" color={"white"} justify={"space-between"} m="30px">
          <Flex>
            Aprimorar sua presença digital? Me contrate por e-mail:
            <Link ml="5px" href="mailto:iurierick@gmail.com">
              iurierick@gmail.com
            </Link>
          </Flex>
          <Flex fontWeight="bold" pr="20px">
            Vamos começar?{" "}
            <Img
              ml="10px"
              w="10px"
              h="10px"
              mt="10px"
              src="/icons/Arrow 1.png"
            />
          </Flex>
        </Flex>
      </Flex>

      {/* Container principal */}
      <Flex
        direction={"column"}
        align={"center"}
        w="100%"
        h="3200px"
        bg="black"
      >
        {/* Navbar */}
        <Flex
          justify={"center"}
          align={"center"}
          borderBottom={"1px"}
          borderColor={"#646464"}
          h="70px"
          w="100%"
        >
          <Flex m="30px" w="1300px" justify={"space-between"} h="30px">
            {/* Container 1 */}
            <Flex align={"center"} color={"white"}>
              <Flex pr="15px" fontWeight={"bold"} direction={"row"}>
                <Flex
                  mt="6px"
                  mr="3px"
                  bg="#146EF5"
                  w="13px"
                  h="13px"
                  borderRadius={"50%"}
                ></Flex>
                Erick Aniello
              </Flex>
              <Flex pr="15px">
                <Popover>
                  <PopoverTrigger>
                    <Button
                      _hover={{
                        bg: "black",
                      }}
                      bg="black"
                      color={"white"}
                    >
                      Sobre mim
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody color={"black"}>
                      <b>Erick Aniello</b> é um UX Design, Front-end developer com base
                      em são paulo, especialista em criar interfaces funcionais
                      e elegantes para produtos online.
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Flex>
              <Flex pr="15px"></Flex>
            </Flex>

            {/* Container 2 */}
            <Flex align={"center"}>
              <Link href="https://github.com/Erick-Iuri" target="_blank">
                <Img mr="15px" src="/icons/github.png" w="20px" h="20px" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/erick-aniello-49953b163/"
                target="_blank"
              >
                <Img
                  mr="15px"
                  src="/icons/logo In white.png"
                  w="20px"
                  h="20px"
                />
              </Link>
            </Flex>

            {/* Container 3 */}
            <Flex align={"center"}>
              <Link href="mailto:iurierick@gmail.com">
                <Button
                  _hover={{
                    bg: "#053C8F",
                  }}
                  _active={{
                    bg: "#76ADFF",
                  }}
                  p="25px 30px"
                  borderRadius={"5px"}
                  fontSize={"15px"}
                  fontWeight={"bold"}
                  color={"white"}
                  bgColor={"#146EF5"}
                  mr="15px"
                >
                  Me mande um E-mail
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>

        {/* H1 */}
        <Flex justify={"center"} h="70px" w="100%">
          <Flex w="1300px" justify={"start"} color={"white"} m="30px">
            <Flex direction={"column"}>
              <Text w="60%" fontWeight={"bold"} fontSize={"46px"}>
                Explore meu portfólio e descubra minha abordagem única.
              </Text>
              <Text fontWeight={"light"} fontSize={"24px"}>
                Conheça meus trabalhos aqui.
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {/* Tilt Card 1 */}
        <Flex align={"center"} justify={"center"} mt="230px">
          <Card1 />
        </Flex>

        {/* H2 */}
        <Flex color={"white"} direction={"column"}>
          <Flex fontSize={"36px"} fontWeight={"bold"}>
            Minhas habilidades com programação e design.
          </Flex>
          <Flex
            justify={"center"}
            fontSize={"26px"}
            fontWeight={"thin"}
            w="100%"
            textAlign={"center"}
          >
            <Text w="70%">
              Aqui estão algumas das minhas ferramentas para juntar forças no
              seu projeto.
            </Text>
          </Flex>
        </Flex>

        {/* Skills*/}
        <Flex mt="30px">
          <Flex
            _hover={{
              bg: "#FF6B00",
              filter: "drop-shadow(6px -11px 206.1px rgba(255, 107, 0, 0.63))",
            }}
            transition={"0.9s"}
            border="1px"
            borderColor={"#FF6B00"}
            mr="10px"
            w="280px"
            h="360px"
            bg="black"
            align={"center"}
            justify={"center"}
          >
            <Img w="150px" h="150px" src="/icons/Photo.png" />
          </Flex>
          <Flex
            border="1px"
            borderColor={"#EE1D36"}
            _hover={{
              bg: "#EE1D36",
              filter: "drop-shadow(6px -11px 206.1px #EE1D36)",
            }}
            transition={"0.9s"}
            mr="10px"
            w="280px"
            h="360px"
            bg="black"
            align={"center"}
            justify={"center"}
          >
            <Img w="150px" h="150px" src="/icons/Ilustrator.png" />
          </Flex>

          <Flex
            border="1px"
            borderColor={"#00D722"}
            _hover={{
              bg: "#00D722",
              filter: "drop-shadow(6px -11px 206.1px #00D722)",
            }}
            transition={"0.9s"}
            mr="10px"
            w="280px"
            h="360px"
            bg="black"
            align={"center"}
            justify={"center"}
          >
            <Img w="150px" h="150px" src="/icons/Chakra UI.png" />
          </Flex>

          <Flex
            _hover={{
              bg: "#146EF5",
              filter: "drop-shadow(6px -11px 206.1px #146EF5)",
            }}
            transition={"0.9s"}
            border="1px"
            borderColor={"#146EF5"}
            w="280px"
            h="360px"
            bg="black"
            align={"center"}
            justify={"center"}
          >
            <Img w="150px" h="150px" src="/icons/React.png" />
          </Flex>
        </Flex>

        {/* H3 */}
        <Flex color={"white"} direction={"column"} mt="50px">
          <Flex fontSize={"36px"} fontWeight={"bold"}>
            Trabalhos & Redesigns
          </Flex>
        </Flex>

        {/* Re-Design 1 Ubisoft */}
        <Flex mt="40px" w="1200px" gap={10} justify={"center"}>
          <Flex pt="20px" direction={"column"} color={"white"} w="665px">
            <Text fontSize={"20px"} fontWeight={"bold"}>
              Ubisoft Connect UI & UX DESIGN
            </Text>
            <Text mt="10px" fontWeight={"thin"}>
              Redesign do Aplicativo Ubisoft Connect para uma Experiência
              Aprimorada do Usuário (UX Design).
            </Text>
          </Flex>

          <Flex w="100%" cursor={"pointer"}>
            <Flex
              w="100%"
              h="442px"
              bgSize={"cover"}
              bgRepeat={"no-repeat"}
              bgImage={"/icons/Tela 1 moldura azul.png"}
            >
              <T01 />
            </Flex>
          </Flex>
        </Flex>

        {/* Re-Design 2 Line Space Design */}
        <Flex mt="40px" w="1200px" gap={10} justify={"center"}>
          <Flex pt="20px" direction={"column"} color={"white"} w="665px">
            <Text fontSize={"20px"} fontWeight={"bold"}>
              Line Space Design.
            </Text>
            <Text mt="10px" fontWeight={"thin"}>
              A Line Space foi meu projeto pessoal de empreendedorismo.
            </Text>
          </Flex>

          <Flex w="100%" cursor={"pointer"}>
            <Flex
              w="100%"
              h="442px"
              bgSize={"cover"}
              bgRepeat={"no-repeat"}
              bgImage={"/icons/LineSpace Borda vermelha.png"}
            >
              <T02 />
            </Flex>
          </Flex>
        </Flex>

        {/* Porjeto Re-design youtube Music */}
        <Flex mt="40px" w="1200px" gap={10} justify={"center"}>
          <Flex pt="20px" direction={"column"} color={"white"} w="665px">
            <Text fontSize={"20px"} fontWeight={"bold"}>
              Youtube Music (App Redesign)
            </Text>
            <Text mt="10px" fontWeight={"thin"}>
              Redesign User Interface do Youtube Music.
            </Text>
          </Flex>

          <Flex w="100%" cursor={"pointer"}>
            <Flex
              w="100%"
              h="442px"
              bgSize={"cover"}
              bgRepeat={"no-repeat"}
              bgImage={"/icons/Group 142.png"}
            >
              <T03 />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
