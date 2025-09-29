import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Message {
  sender: "user" | "bot"
  text: string
  time: string
}

interface ChatExampleProps {
  title: string
  messages: Message[]
  botAvatar?: string
  botName: string
}

export function ChatExample({ title, messages, botAvatar, botName }: ChatExampleProps) {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-border/50">
      <h3 className="text-lg font-semibold mb-4 text-center">{title}</h3>
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className={`flex gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}>
            <Avatar className="h-8 w-8 flex-shrink-0">
              {message.sender === "bot" ? (
                <>
                  <AvatarImage src={botAvatar || "/placeholder.svg"} alt={botName} />
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs">AI</AvatarFallback>
                </>
              ) : (
                <AvatarFallback className="bg-muted text-muted-foreground text-xs">U</AvatarFallback>
              )}
            </Avatar>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                message.sender === "user"
                  ? "bg-primary text-primary-foreground ml-auto"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs opacity-70 mt-1">{message.time}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
