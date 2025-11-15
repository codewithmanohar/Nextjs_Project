import { Switch } from "@/components/ui/switch"

export function CustomToggle() {
  return (
    <div className="flex flex-col gap-6 p-10">
      
      {/* Orange active switch */}
      <Switch 
        className="data-[state=checked]:bg-orange-400 w-16 h-9"
        thumbClassName="data-[state=checked]:translate-x-7 w-8 h-8"
        defaultChecked
      />

      {/* Gray inactive switch */}
      <Switch 
        className="bg-gray-300 data-[state=checked]:bg-gray-300 w-16 h-9"
        thumbClassName="w-8 h-8"
      />

      {/* Another inactive switch */}
      <Switch 
        className="bg-gray-300 data-[state=checked]:bg-gray-300 w-16 h-9"
        thumbClassName="w-8 h-8"
      />

    </div>
  )
}
