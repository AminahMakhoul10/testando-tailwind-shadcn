"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Link } from "lucide-react"

export const Header = () => {
    return(
        <header className="border-b [1px] border-b-zinc-700 ">
         
            <Avatar className="w-fit h-full">
              <AvatarImage src="/icon.svg" className="w-fit h-full"/>
              <AvatarFallback className="bg-zinc-600">
              </AvatarFallback>
            </Avatar>
            <div>
            <strong className="text-3xl">blob.g</strong>
            <p>Noticias do mundo dos códigos</p>
            </div>
         
        </header>
    )
}