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
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Card className="w-[500px] p-2">
        <CardHeader>
          <CardTitle>Crie a sua conta</CardTitle>
          <CardDescription>Insira os seus dados abaixo.</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <Input type="text" placeholder="Digite seu nome" />
          <Input type="text" placeholder="Digite seu sobrenome" />
          <Input type="email" placeholder="Digite seu e-mail" />
          <Input type="password" placeholder="Digite sua senha" />
          <Button type="submit" className="w-full">
            Criar Conta
          </Button>
        </CardContent>
        <CardFooter className="flex items-center justify-center">
          <p className="text-center opacity-50">Já possui uma conta?</p>
          <Button variant="link" asChild>
            <Link to="/login">Faça Login</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default SignupPage
