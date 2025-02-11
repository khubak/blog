import { Card, CardContent } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-6 text-center bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent'>
        About Miracle Tree
      </h1>
      <div className='max-w-3xl mx-auto'>
        <Card className='bg-gray-900 border-gray-800 mb-8'>
          <CardContent className='p-6'>
            <p className='text-gray-300 mb-4'>
              Miracle Tree is at the forefront of Web3 innovation, dedicated to creating decentralized solutions that
              empower individuals and revolutionize the digital landscape.
            </p>
            <p className='text-gray-300 mb-4'>
              Our mission is to bridge the gap between cutting-edge blockchain technology and everyday users, making the
              benefits of decentralization accessible to all.
            </p>
          </CardContent>
        </Card>
        <h2 className='text-2xl font-semibold mb-4 text-purple-400'>Our Vision</h2>
        <Card className='bg-gray-900 border-gray-800 mb-8'>
          <CardContent className='p-6'>
            <ul className='list-disc list-inside text-gray-300 space-y-2'>
              <li>Empower users with control over their digital identities and data</li>
              <li>Foster a more open, transparent, and equitable internet</li>
              <li>Drive innovation in decentralized applications and services</li>
              <li>Contribute to the growth and adoption of Web3 technologies</li>
            </ul>
          </CardContent>
        </Card>
        <h2 className='text-2xl font-semibold mb-4 text-purple-400'>Our Team</h2>
        <Card className='bg-gray-900 border-gray-800'>
          <CardContent className='p-6'>
            <p className='text-gray-300 mb-4'>
              Miracle Tree is powered by a diverse team of passionate developers, designers, and blockchain enthusiasts.
              We bring together expertise from various fields to create innovative solutions for the decentralized web.
            </p>
            <p className='text-gray-300'>
              Interested in joining our team? Check out our careers page or reach out to us directly!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
