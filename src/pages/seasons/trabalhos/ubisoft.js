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

export default function T01() {
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
            Projeto Ubisoft Connect{" "}
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
                    <Text fontWeight={"bold"}>Ubisoft Connect Redesign</Text>
                    <Text>Erick Aniello | UI / UX Designer </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>

            {/*📷*/}
            <Flex justify={"center"}>
              <Box
                bgImage={"/Projeto fim/asda.jpg"}
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
                Redesign do Aplicativo Ubisoft Connect para uma Experiência
                Aprimorada do Usuário (UX Design).
              </Text>
            </Flex>

            {/*💬*/}
            <Flex justify={"center"} mt="40px">
              <Text w="80%" fontSize={"20px"} textAlign={"center"}>
                Esse projeto foi uma iniciativa pessoal, para aprimorar
                significativamente a experiência do usuário (UX) do aplicativo,
                que identifiquei como uma área de oportunidade após explorar a
                versão beta. Percebi que havia espaço para melhorias
                substanciais no design e na usabilidade, e isso me inspirou a
                criar um projeto dedicado ao aprimoramento do Ubisoft Connect.
              </Text>
            </Flex>

            {/*📷*/}
            <Flex justify={"center"}>
              <Box w="90%" mt="20px">
                <Img src="/Projeto fim/pc.png" />
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
                Os principais objetivos do projeto incluíam:
              </Text>
            </Flex>

            {/*💬*/}
            <Flex justify={"center"} mt="40px">
              <Flex direction={"column"} w="70%">
                <Text w="100%" fontSize={"20px"} textAlign={"start"}>
                  1 - Melhorar a Navegação: Tornar a navegação no aplicativo
                  mais fluida e intuitiva.
                </Text>

                <Text w="100%" fontSize={"20px"} textAlign={"start"} mt="20px">
                  2 - Aprimorar a Estética: Modernizar o design, tornando-o mais
                  atraente e alinhado às tendências de design atuais.
                </Text>

                <Text w="100%" fontSize={"20px"} textAlign={"start"} mt="20px">
                  3 - Otimizar a Usabilidade: Simplificar os processos para
                  garantir que os usuários atinjam seus objetivos de forma
                  eficiente.
                </Text>

                <Text w="100%" fontSize={"20px"} textAlign={"start"} mt="20px">
                  4 - Integrar Feedback dos Usuários: Incorporar sugestões e
                  feedback dos usuários beta para garantir que as necessidades
                  reais dos usuários fossem consideradas.
                </Text>
              </Flex>
            </Flex>

            {/*📷*/}
            <Flex justify={"center"}>
              <Box w="90%" mt="20px">
                <Img src="/Projeto fim/wireframes.png" />
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
                Metodologia:
              </Text>
            </Flex>

            {/*💬*/}
            <Flex justify={"center"} mt="30px">
              <Text w="80%" fontSize={"20px"} textAlign={"center"}>
                O processo de Redesign envolveu várias etapas, começando com a
                análise aprofundada da versão beta do Ubisoft Connect. Realizei
                pesquisas adicionais para entender as expectativas dos usuários
                e as melhores práticas de UX design. A criação de wireframes
                detalhados precedeu a fase de design, onde busquei uma estética
                moderna e coesa.
              </Text>
            </Flex>

            {/*📷*/}
            <Flex justify={"center"}>
              <Box w="90%" mt="20px">
                <Img src="/Projeto fim/Perfil.png" />
              </Box>
            </Flex>

            {/*📷*/}
            <Flex justify={"center"}>
              <Box w="90%" mt="20px">
                <Img src="/Projeto fim/Biblioteca 1.png" />
              </Box>
            </Flex>

             {/*📷*/}
            <Flex justify={"center"}>
              <Box w="90%" mt="20px">
                <Img src="/Projeto fim/Loja 1.png" />
              </Box>
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
