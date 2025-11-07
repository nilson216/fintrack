import { Eye, EyeOffIcon } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const SignupPage = () => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false)
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-3">
      <Card className="w-[500px] p-2">
        <CardHeader>
          <CardTitle>Crie a sua conta</CardTitle>
          <CardDescription>Insira os seus dados abaixo.</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <Input type="text" placeholder="Digite seu nome" />
          <Input type="text" placeholder="Digite seu sobrenome" />
          <Input type="email" placeholder="Digite seu e-mail" />
          <div className="relative">
            <Input
              type={passwordIsVisible ? 'text' : 'password'}
              placeholder="Digite sua senha"
            />
            <Button
              className="absolute bottom-0 right-0 top-0 my-auto mr-1 h-8 w-8 text-muted-foreground"
              variant="ghost"
              onClick={() => setPasswordIsVisible((prev) => !prev)}
            >
              {passwordIsVisible ? <EyeOffIcon /> : <Eye />}
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Criar Conta
          </Button>
        </CardFooter>
      </Card>
      <div className="flex items-center justify-center">
        <p className="text-center opacity-50">Já possui uma conta?</p>
        <Button variant="link" asChild>
          <Link to="/login">Faça Login</Link>
        </Button>
      </div>
    </div>
  )
}

export default SignupPage
