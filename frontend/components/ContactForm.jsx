import InputField from "./InputField";
import useFormPageReducer from "../reducer/formReducer";
import SubmitButton from "./SubmitButton";
import { Box, Heading } from '@chakra-ui/react'

function ContactForm() {

  const [state, dispatch] = useFormPageReducer();

  let isValid = true

  const validateFields = (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z\s]+$/;

    if (!state.name) {
      dispatch({ type: 'SET_NAME_ERROR', payload: "Name should not be empty" })
      isValid = false;
    } else if (!nameRegex.test(state.name)) {
      dispatch({ type: 'SET_NAME_ERROR', payload: "Name should not contain numbers and special characters'" })
      isValid = false;
    }

    if (!state.email) {
      dispatch({ type: 'SET_EMAIL_ERROR', payload: "email should not be empty" })
      isValid = false;
    } else if (!emailRegex.test(state.email.trim())) {
      dispatch({ type: 'SET_EMAIL_ERROR', payload: "email should be in example@example.com format" })
      isValid = false;
    }

    if (!state.message) {
      dispatch({ type: 'SET_MESSAGE_ERROR', payload: "Message should not be empty" })
      isValid = false;
    } else if (state.message.length <= 4) {
      dispatch({ type: 'SET_MESSAGE_ERROR', payload: "Message must be more than 4 characters" })
      isValid = false;
    }


    return isValid;

  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateFields()) {
      setFormSubmitted(true);
      alert('success!');
      dispatch({ type: 'CLEAR_ERRORS' });

    }
  };



  return (
    <Box
      w='100%'
      h='100%'
      display='flex'
      justifyContent='center'
      alignItems='center'
      my='50px'
      textAlign="center"
    >
      <Box
        bg='#EED3D9'
        p='10px'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        w={{ base: '80%', md: '65%', lg: '55%' }}
        borderRadius='10px'
        color="black"
      >
        <Heading>I'D LIKE TO HEAR FROM YOU</Heading>
        <Box w={{ base: '80%', md: '65%', lg: '75%' }}
          m={{ base: '10px', lg: '60px' }}
          p={{ base: '10px', md: '5px' }}


        >
          <form onSubmit={handleSubmit}  >
            <InputField
              placeholder="Enter your name"
              value={state.name}
              type="text"
              errorMessage={state.nameError}
              onChange={(e) => {
                dispatch({ type: 'SET_NAME', payload: e.target.value });
                dispatch({ type: 'SET_NAME_ERROR', payload: '' });

              }}
            />

            <InputField
              placeholder="Enter your email"
              value={state.email}
              type="email"
              errorMessage={state.emailError}
              onChange={(e) => {
                dispatch({ type: 'SET_EMAIL', payload: e.target.value });
                dispatch({ type: 'SET_EMAIL_ERROR', payload: '' });
              }}
            />

            <InputField

              placeholder="Write a message..."
              value={state.message}
              type="textarea"
              errorMessage={state.mesageError}
              onChange={(e) => {
                dispatch({ type: 'SET_MESSAGE', payload: e.target.value });
                dispatch({ type: 'SET_MESSAGE_ERROR', payload: '' });
              }}
            />
            <SubmitButton />
          </form>
        </Box>
      </Box>
    </Box>
  );
}


export default ContactForm;