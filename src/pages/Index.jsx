import { Box, Button, Container, Flex, Heading, HStack, IconButton, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.600" color="white" padding={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">CodeLearn</Heading>
        <HStack spacing={8}>
          <Link href="#">Home</Link>
          <Link href="#">Courses</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box bg="blue.500" color="white" py={20} textAlign="center">
        <Container maxW="container.md">
          <Heading as="h1" size="2xl" mb={4}>Learn to Code with CodeLearn</Heading>
          <Text fontSize="lg" mb={6}>Join our community and start your coding journey today.</Text>
          <Button colorScheme="teal" size="lg">Get Started</Button>
        </Container>
      </Box>

      {/* Featured Courses Section */}
      <Container maxW="container.md" py={20}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">Featured Courses</Heading>
        <Flex wrap="wrap" justifyContent="space-around">
          <Box bg="gray.100" p={6} m={4} borderRadius="md" width="300px" textAlign="center">
            <Image src="https://via.placeholder.com/150" alt="Course 1" mb={4} />
            <Heading as="h3" size="md" mb={2}>Course 1</Heading>
            <Text mb={4}>Introduction to Programming</Text>
            <Button colorScheme="teal">Learn More</Button>
          </Box>
          <Box bg="gray.100" p={6} m={4} borderRadius="md" width="300px" textAlign="center">
            <Image src="https://via.placeholder.com/150" alt="Course 2" mb={4} />
            <Heading as="h3" size="md" mb={2}>Course 2</Heading>
            <Text mb={4}>Advanced JavaScript</Text>
            <Button colorScheme="teal">Learn More</Button>
          </Box>
          <Box bg="gray.100" p={6} m={4} borderRadius="md" width="300px" textAlign="center">
            <Image src="https://via.placeholder.com/150" alt="Course 3" mb={4} />
            <Heading as="h3" size="md" mb={2}>Course 3</Heading>
            <Text mb={4}>Web Development Bootcamp</Text>
            <Button colorScheme="teal">Learn More</Button>
          </Box>
        </Flex>
      </Container>

      {/* Footer */}
      <Box bg="blue.600" color="white" py={10}>
        <Container maxW="container.md">
          <Flex justifyContent="space-between" alignItems="center">
            <Text>&copy; 2023 CodeLearn. All rights reserved.</Text>
            <HStack spacing={4}>
              <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
              <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
              <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;