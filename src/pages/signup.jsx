import { Link } from 'react-router-dom'

import PasswordInput from '@/components/password-input'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const SignupPage = () => {
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
          <PasswordInput />
          <PasswordInput placeholder="Digite sua senha novamente" />
          <div className="items-top flex gap-2">
            <Checkbox id="terms" />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="terms"
                className="text-xs text-muted-foreground opacity-75"
              >
                Ao clicar em &quot;Criar conta&quot;, você concorda com{' '}
                <a href="/" className="text-white underline">
                  nosso termo de uso e política de privacidade.
                </a>
              </Label>
            </div>
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
