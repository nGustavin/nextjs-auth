import {
  Flex, 
  Spacer, 
  Text, 
  Heading, 
  Link, 
  InputGroup, 
  Input, 
  InputRightElement, 
  InputLeftElement, 
  Button
} from '@chakra-ui/react'

import {useForm, SubmitHandler} from 'react-hook-form'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import logo from '../assets/logo.svg'
import api from '../services/api'
import Router from 'next/router'


interface Login{
  email: string
  password: string
}


const Main: React.FC = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const {handleSubmit, register} = useForm<Login>()

  const onSubmit: SubmitHandler<Login> = async (data) => {
      await api.post('/login', {email: data.email, password: data.password})
      console.log({
        email: data.email,
        password: data.password
      })

      // Router.push('dashboard')
  }

  return(
    <Flex 
      flexDirection="column" 
      backgroundColor="white" 
      width="100vw" 
      height="100vh" 
      alignItems="center" 
      justifyContent="center"
    >
      <Flex 
        w="container.sm" 
        h="100%" 
        paddingX="28" 
        paddingY="3%" 
        flexDirection="column" 
        justifyContent="flex-start" 
        alignItems="center"
      > 
        <Image 
          src={logo} 
          alt="site logo"
          height={240}
        />

        <Flex 
          w="100%" 
          height="fit-content" 
          flexDirection="column" 
          marginTop="-4"
        >
          <Heading 
            fontSize="32" 
            fontWeight="800" 
            marginBottom="3"
            fontFamily="heading"
            lineHeight="1.2"
            userSelect="none"
          >Hey,<br/> Login Now.
          </Heading>

          <Flex w="100%" alignItems="center"> 
            <Text 
              opacity="0.4" 
              fontWeight="800"
              marginRight="1"
              userSelect="none"
            >If you are new /
            </Text>  
            <Link fontWeight="800" userSelect="none">Create New</Link> 
          </Flex>
        </Flex>

        <Flex w="100%" mt="20" flexDir="column">
          <InputGroup size="md" mb="6">
            <Input
              borderRadius="xl"
              pr="4.5rem"
              h="14"
              type="email"
              placeholder="E-mail"
              bgColor="#F5F5F5"
              border="none"
              fontWeight="800"
              _placeholder={{fontWeight: 800}}
              _focus={{backgroundColor: '#FDCE85', _placeholder:{color: '#000'}}}
              {...register("email")}
            />
          </InputGroup>
          <InputGroup size="md" >
          <Input
            borderRadius="xl"
            pr="4.5rem"
            h="14"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            bgColor="#F5F5F5"
            border="none"
             fontWeight="800"
            _placeholder={{fontWeight: 800}}
            _focus={{backgroundColor: '#FDCE85', _placeholder:{color: '#000'}}}
            {...register("password")}
          />
          <InputRightElement width="4.9rem" h="100%">
            <Button borderRadius="xl" h="1.95rem" size="sm" fontWeight="800" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
          <Flex w="100%" alignItems="center" mt="4" ml="2"> 
            <Text 
              opacity="0.4" 
              fontWeight="800"
              marginRight="1"
              fontSize="sm"
              userSelect="none"
            >Forgot Password? /
            </Text>  
            <Link fontWeight="800" fontSize="sm" userSelect="none">Reset</Link> 
          </Flex>
        </Flex>

        <Spacer/>
          <Button
            onClick={handleSubmit(onSubmit)}
            borderRadius="xl"
            w="100%"
            h="14"
            bgColor="#B12341"
            color="#FFF"
            _hover={{bgColor: '#c02a4a'}}
            type="submit"
          >
            Login
          </Button>
        <Spacer/>
      </Flex>
    </Flex>
  )
  
    
}

export default Main
