import React from 'react';
import Link from 'next/link'
import { buttonVariants } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import data from "@/app/data";
import Footer from '../footer';

const Page = () => {
    return (
        <div className="p-4 w-full sm:w-1/2 text-center mx-auto">
            <h1 className='text-4xl mb-4'>Rick and Morty Characters</h1>
            <Link href={'/'} className={buttonVariants({ variant: "outline" })}>Home Page</Link>
            <Accordion type="single" collapsible className="w-full">
                {data.map((character) => (
                    <AccordionItem key={character.id} value={`item-${character.id}`}>
                        <AccordionTrigger className="hover:no-underline">{character.name}</AccordionTrigger>
                        <AccordionContent>
                            <div className="flex items-center gap-4">
                                <img src={character.image} alt={character.name} className="rounded-full w-32 h-32 sm:w-48 sm:h-48" />
                                <div>
                                    <p><strong>Status:</strong> {character.status}</p>
                                    <p><strong>Species:</strong> {character.species}</p>
                                    <p><strong>Gender:</strong> {character.gender}</p>
                                    <p><strong>Origin:</strong> {character.origin}</p>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            <Footer />
        </div>
    );
};

export default Page;