import { Box, Input, Textarea } from "@chakra-ui/react";

function InputField({ id, type, onChange, value, placeholder, errorMessage }) {



  return (
    <Box>
      <Box mt={5}>
        {type === 'textarea' ? (
          <Textarea
            onChange={onChange}
            id={id}
            value={value}
            placeholder={placeholder}
            borderColor="#000000"
            _hover={{ borderColor: "#5755FE" }}
            _focus={{ borderColor: "#5755FE", boxShadow: "0 0 0 1px #8B93FF" }}
            borderRadius="md"
          />
        ) : (
          <Input
            onChange={onChange}
            type={type}
            id={id}
            value={value}
            placeholder={placeholder}
            borderColor="#000000"
            _hover={{ borderColor: "#5755FE" }}
            _focus={{ borderColor: "#5755FE", boxShadow: "0 0 0 1px #8B93FF" }}
            borderRadius="md" />
        )}
      </Box>

      <Box>
        <div style={{ color: 'red' }} >{errorMessage}</div>
      </Box>
    </Box>

  );
}

export default InputField;
