import { Star, ThumbsUp, Award, TrendingUp } from "lucide-react"

export default function Component() {
  return (
    <div className="w-full flex flex-col items-center max-w-4xl mx-auto mt-4 p-4">
    <div className="flex gap-2 md:gap-36">
      <StatItem icon={<Star className="w-4 h-4 md:w-6 md:h-6 text-purple-500" />} value="4.8" description="Nossa Classificação" />
      <StatItem icon={<ThumbsUp className="w-4 h-4 md:w-6 md:h-6 text-purple-500" />} value="+100" description="Projetos Aprovados" />
      <StatItem icon={<TrendingUp className="w-4 h-4 md:w-6 md:h-6 text-purple-500" />} value="+600%" description="Valor Agregado" />
    </div>
    </div>
  )
}

interface StatItemProps {
  icon: React.ReactNode;
  value: string | number;
  description: string;
}

function StatItem({ icon, value, description }: StatItemProps) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center space-x-2">
        <div className="text-2xl font-bold text-purple-500">{value}</div>
        {icon}
      </div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  )
}