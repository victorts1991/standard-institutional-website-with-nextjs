import Image from "next/image"

import Header from '../components/Header'
import Metrics from '../components/Metrics'
import OpenPositions from "../components/OpenPositions";
import PositionsList from "@/components/PositionsList";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-20"> 
      <Header />
      <Metrics />
      <OpenPositions />
      <PositionsList />
    </main>
  );
}
