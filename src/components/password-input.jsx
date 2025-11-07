import { Eye, EyeOffIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const PasswordInput = ({ placeholder = 'Digite sua senha' }) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false)

  return (
    <div className="relative">
      <Input
        type={passwordIsVisible ? 'text' : 'password'}
        placeholder={placeholder}
      />
      <Button
        className="absolute bottom-0 right-0 top-0 my-auto mr-1 h-8 w-8 text-muted-foreground"
        variant="ghost"
        onClick={() => setPasswordIsVisible((prev) => !prev)}
      >
        {passwordIsVisible ? <EyeOffIcon /> : <Eye />}
      </Button>
    </div>
  )
}

export default PasswordInput
