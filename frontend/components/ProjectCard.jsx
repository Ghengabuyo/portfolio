import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Image,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Divider,
  Link,
  useDisclosure,
} from '@chakra-ui/react'
import CustomModal from './CustomModal';

function ProjectCard({ projectPoster, projectName, description, gitHubLink, websiteLink, modalContent }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (

    <>
      <Card maxW='sm' borderRadius='10px' boxShadow='5px 5px 20px rgb(215, 159, 159)'>
        <CardBody>
          <Image
            src={projectPoster}
            alt={projectName}
            borderRadius='lg'
            width="100%"
          />
          <Stack mt='6' spacing='3' display="flex" justifyContent="center" alignItems="center" >
            <Heading size='md'>{projectName}</Heading>
            <Text noOfLines={3}>
              {description}
            </Text>
            <Link onClick={onOpen}>
              <Text color="teal.500" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
                Read more...
              </Text>
            </Link>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter display="flex" justifyContent="center" alignItems="center">
          <ButtonGroup spacing='2' >
            <Button as="a" href={gitHubLink} target="_blank" variant="ghost" colorScheme="blue">
              GitHub
            </Button>
            <Button as="a" href={websiteLink} target="_blank" variant="solid" colorScheme="blue">
              Visit
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>


      <CustomModal isOpen={isOpen} onClose={onClose} title={projectName}>
        {modalContent}
      </CustomModal>
    </>

  );
}

export default ProjectCard;