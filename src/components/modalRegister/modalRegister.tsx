import { Container, Contem, Header, Main, Form } from "./style"
import { MdOutlineClose } from 'react-icons/md'
import { createRef, useContext, useEffect } from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { InputComponent,PasswordInputComponent } from "../Inputs" 
import { ButtonComponent } from "../Buttons" 
import { UserContext } from "../../contexts/userContext"
import { ModalContext } from "../../contexts/modalContext"
import { iRegisterData } from "../../services/postRegister"
import { registerSchema } from "../../schemas/userSchema"


interface iModal {
    setModal: (state: boolean) => void,
}

export function Modal({  setModal }:iModal): JSX.Element {
    const modalRef = createRef<HTMLDivElement>()
                               
    const { register, handleSubmit, formState: { errors } } = useForm<iRegisterData>({
        resolver: yupResolver(registerSchema)
    })

    const { handleRegister, isValidate } = useContext(UserContext)


    useEffect(() => {
        const handleOnClick = (event: MouseEvent) => {
            if(!modalRef.current?.contains(event.target as Element)) {
                setModal(false)
            }
        }

        document.addEventListener('mousedown', handleOnClick)

        return () => {
            document.removeEventListener('mousedown', handleOnClick)
        }
    }, [])

    
    return(
        <Container>
            <div ref={modalRef}>
                <Header>
                    <h1>SignUp</h1>
                    <MdOutlineClose onClick={() => setModal(false)}/>
                </Header>
                
                <Main>
                    <Form onSubmit={handleSubmit(handleRegister)}>
                        
                            <InputComponent  labelRefer="nome" labelText="nome" placeholder="Digite aqui seu nome" autoComplete='username' {...register('name')}/>
                            {
                                errors.name &&
                                <p className='error'>{errors.name?.message}</p>
                            }
                    
                        
                         
                            <InputComponent  labelRefer="email" labelText="email" placeholder="Digite aqui seu email" autoComplete='email' {...register('email')}/>
                            {
                                errors.email &&
                                <p className='error'>{errors.email?.message}</p>
                            }
                        

                         
                            <PasswordInputComponent  labelRefer="password" labelText="password" type='password' placeholder="Digite aqui sua senha" autoComplete='new-password' {...register('password')}/>
                            {
                                errors.password &&
                                <p className='error'>{errors.password?.message}</p>
                            }
                        

                         
                            <PasswordInputComponent  labelRefer="password1" labelText="password1" type='password' placeholder="Digite novamente sua senha" autoComplete='new-password' {...register('confirmPassword')}/>
                            {
                                errors.confirmPassword &&
                                <p className='error'>{errors.confirmPassword?.message}</p>
                            }
                        
                        
                        <ButtonComponent type='submit'>Cadastrar</ButtonComponent>
                    </Form>
                </Main>    
            </div>
        </Container>        
        
    )
}