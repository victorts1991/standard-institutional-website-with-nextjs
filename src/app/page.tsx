import Image from "next/image"

import Header from '../components/Header'
import Metrics from '../components/Metrics'

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-20"> 
      <Header />
      <Metrics />
    </main>
  );
}
