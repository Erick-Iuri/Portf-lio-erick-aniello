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

export default function T03() {
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
            Youtube Music (App Redesign) 
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
                    <Text fontWeight={"bold"}>Youtube Music (App Redesign)</Text>
                    <Text>Erick Aniello | UI / UX Designer </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>

            {/*📷*/}
            <Flex justify={"center"}>
              <Box
                bgImage={"/Youtube music/Group 115.png"}
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
                Página Inicial Reimaginada:
              </Text>
            </Flex>

            {/*💬*/}
            <Flex justify={"center"} mt="40px">
              <Text w="80%" fontSize={"20px"} textAlign={"center"}>
              Iniciado como uma empreitada pessoal, este projeto nasceu do meu desejo intrínseco de elevar a experiência do usuário (UX) no aplicativo. 
              </Text>
            </Flex>

             {/*📷*/}
            <Flex justify={"center"}>
              <Box
              mt="20px"
                bgImage={"/Youtube music/Inicio12.png"}
                bgSize={"cover"}
                bgPosition={"center"}
                w="90%"
                h="442px"
              ></Box>
            </Flex>

            {/*📷*/}
            <Flex justify={"center"}>
              <Box
              mt="20px"
                bgImage={"/Youtube music/bibliotecaww.png"}
                bgSize={"cover"}
                bgPosition={"center"}
                w="90%"
                h="442px"
              ></Box>
            </Flex>

            {/*📷*/}
            <Flex justify={"center"}>
              <Box
              mt="20px"
                bgImage={"/Youtube music/youtubemusiccc.png"}
                bgSize={"cover"}
                bgPosition={"center"}
                w="90%"
                h="442px"
              ></Box>
            </Flex>

            {/*💬*/}
            <Flex justify={"center"} mt="40px">
              <Text w="80%" fontSize={"20px"} textAlign={"center"}>
              Wireframes
              </Text>
            </Flex>

             {/*📷*/}
             <Flex justify={"center"}>
              <Box
              mt="20px"
                bgImage={"/Youtube music/wireframe1.png"}
                bgSize={"cover"}
                bgPosition={"center"}
                w="90%"
                h="442px"
              ></Box>
            </Flex>

            {/*📷*/}
            <Flex justify={"center"}>
              <Box
              mt="20px"
                bgImage={"/Youtube music/wireframe2.png"}
                bgSize={"cover"}
                bgPosition={"center"}
                w="90%"
                h="472px"
              ></Box>
            </Flex>

            {/*📷*/}
            <Flex justify={"center"}>
              <Box
              mt="20px"
                bgImage={"/Youtube music/wireframe3.png"}
                bgSize={"cover"}
                bgPosition={"center"}
                w="90%"
                h="472px"
              ></Box>
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
