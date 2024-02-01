import { Button, Flex, Text, Img, Box, background } from "@chakra-ui/react";

import React from "react";

/* Modal menu */

import { useDisclosure } from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function T02() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex w="100%" h="100%" borderRadius={"10px"} onClick={onOpen}>
        <Flex
          _hover={{
            opacity: "1",
            transition: "0.3s",
          }}
          opacity={"0"}
          bgGradient="linear(to-b, transparent 50%, black 100%)"
          direction={"column"}
          justify={"end"}
          p="20px"
          w="100%"
          h="100%"
        >
          <Text color={"white"} fontWeight={"bold"} fontSize={"20px"}>
            {" "}
            Line Space Design.{" "}
          </Text>
        </Flex>
      </Flex>

      {/* Modal menu */}
      <Modal isOpen={isOpen} onClose={onClose} size={"6xl"}>
        <ModalOverlay />

        <ModalContent borderRadius={"10px"} h="auto">
          <ModalCloseButton />

          {/* Conteúdo */}
          <ModalBody>
            {/* Header 📷💬 */}
            <Flex mb="10px" ml="55px" justify={"start"}>
              <Flex mt="10px">
                <Flex mb="10px">
                  <Img
                    w="40px"
                    h="40px"
                    mr="10px"
                    mt="5px"
                    src="/icons/Bola azul.png"
                  />

                  <Flex direction={"column"}>
                    <Text fontWeight={"bold"}>Line Space Design</Text>
                    <Text>Erick Aniello | UI / UX Designer </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>

            {/*📷*/}
            <Flex justify={"center"}>
              <Box
                bgImage={"/icons/Cover Line space.jpg"}
                bgSize={"cover"}
                bgPosition={"center"}
                w="90%"
                h="500px"
              ></Box>
            </Flex>

            {/*💬*/}
            <Flex justify={"center"} mt="20px">
              <Text
                w="60%"
                fontSize={"20px"}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                A Line Space foi meu projeto pessoal de empreendedorismo, nossa
                principal missão era levar o poder do design para pequenos
                negócios.
              </Text>
            </Flex>

            {/*💬*/}
            <Flex justify={"center"} mt="40px">
              <Text w="80%" fontSize={"20px"} textAlign={"center"}>
                Lembro-me com carinho do nosso primeiro cliente, que estava
                buscando uma logo design para sua vidraçaria. Trabalhamos muito
                para trazer ao design tudo o que melhor representava seu negocio
                e seus valores.
              </Text>
            </Flex>

            {/*📷*/}
            <Flex justify={"center"}>
              <Box w="90%" mt="20px">
                <Img src="/Line Space Design/Group 63(1).png" />
              </Box>
            </Flex>

            {/*💬*/}
            <Flex justify={"center"} mt="30px">
              <Text
                w="80%"
                fontSize={"20px"}
                textAlign={"center"}
                fontWeight={"bold"}
              >
                Tivemos alguns outros cases de sucesso onde ajudamos ideias a
                sairem do papel.
              </Text>
            </Flex>

            {/*📷*/}
            <Flex justify={"center"}>
              <Box w="90%" mt="20px">
                <Img src="/Line Space Design/Group 65.png" />
              </Box>
            </Flex>

            {/*💬*/}
            <Flex justify={"center"} mt="40px">
              <Text w="80%" fontSize={"20px"} textAlign={"center"}>
                Foi uma jornada muito divertida. Tenho certeza que conseguimos
                ajudar diversas pessoas através do poder do design.
              </Text>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              borderRadius={"30px"}
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
