'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, RefreshCw, Terminal } from 'lucide-react'
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

const puns = [
  "Looks like this page is on a coffee break. It's been a latte since we've seen it!",
  "404: Page not found. Looks like it's playing hide and seek!",
  "Oops! This page has gone to explore the digital wilderness.",
  "Houston, we have a problem. This page seems to have floated off into space.",
  "Knock knock. Who's there? Not this page!",
  "This page is like my code without coffee - it just doesn't exist.",
  "404: This page is like a cat—it comes and goes as it pleases!",
  "Oops! This page ran out for tacos. You should too.",
  "404: This page went to Hogwarts and forgot to return.",
  "Looks like this page got stuck in the Upside Down. Hang tight!",
  "Error 404: This page is as elusive as Bigfoot.",
  "This page took a wrong turn at the Internet crossroads.",
  "404: Like a magician's trick, this page disappeared!",
  "Oops! This page is buffering... forever.",
  "This page is like your keys—always lost when you need it.",
  "404: Looks like this page joined a band and went on tour!",
  "Error: This page is on a digital coffee run.",
  "404: This page moonwalked out of existence.",
  "Looks like this page went to the Matrix and took the wrong pill.",
  "Oops! This page is on vacation—permanently.",
  "404: This page is practicing social distancing. Stay safe!",
];


export default function NotFound() {
  const [pun, setPun] = useState('')

  const getRandomPun = () => {
    const randomIndex = Math.floor(Math.random() * puns.length)
    setPun(puns[randomIndex])
  }

  useEffect(() => {
    getRandomPun()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-background">
      <div className="space-y-6 max-w-md">
        <h1 className="text-6xl font-bold text-primary animate-bounce">404</h1>
        <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            The projects page is currently under construction. Please check back later, Find the Projects on GitHub.
          </AlertDescription>
        </Alert>
        <p className="text-muted-foreground">
          {pun}
        </p>
        <Button variant="outline" size="sm" onClick={getRandomPun} className="mt-2">
          <RefreshCw className="mr-2 h-4 w-4" />
          New Pun
        </Button>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <Button asChild variant="default">
            <Link href="/" className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="https://github.com/HUSAM-07" className="inline-flex items-center" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View Projects on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}