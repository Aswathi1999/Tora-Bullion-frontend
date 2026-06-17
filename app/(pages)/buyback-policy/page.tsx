import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gold & Silver Buyback Policy | Tora Bullion',
  description: 'Tora Bullion buyback policy — sell your gold and silver bullion back to us at competitive live market prices with transparent verification.',
}

export default function BuybackPolicyPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-[#333333]">

      <h1 className="text-4xl font-bold text-[#111111] mb-8 whitespace-nowrap">
        <span className="bg-gradient-to-r from-[#C9982A] to-[#E8C060] bg-clip-text text-transparent">Gold & Silver</span>
        {' '}Buyback Policy — Tora Bullion
      </h1>

      <p className="text-base leading-relaxed mb-8 text-[#555555]">
        At Tora Bullion, we understand that buying gold or silver bullion is an investment decision. To give our customers confidence and flexibility, we offer a buyback facility for gold and silver bullion. Customers that may sell their bullion to us at the current market price are subjected to standard checks for weight and purity. Our aim is to keep the process clear, fair, and straightforward.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#111111] mb-3">What We Accept</h2>
        <p className="text-base text-[#555555] mb-3">We buyback:</p>
        <ul className="list-disc list-inside space-y-1.5 text-base text-[#555555]">
          <li>Gold bars</li>
          <li>Gold bullion coins</li>
          <li>Silver bars</li>
          <li>Silver bullion coins</li>
        </ul>
        <p className="text-base text-[#555555] mt-3">
          Bullion purchased from any recognised source or refinery is accepted, provided it passes verification.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#111111] mb-3">What We Do Not Accept</h2>
        <p className="text-base text-[#555555] mb-3">We do not buyback:</p>
        <ul className="list-disc list-inside space-y-1.5 text-base text-[#555555]">
          <li>Gold or silver jewellery</li>
          <li>Rings, chains, bangles, or ornaments</li>
          <li>Gemstone or customised items</li>
        </ul>
        <p className="text-base text-[#555555] mt-3">Jewellery is not accepted under any circumstances.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#111111] mb-3">How Pricing Works</h2>
        <p className="text-base text-[#555555] mb-3">The buyback price is based on:</p>
        <ul className="list-disc list-inside space-y-1.5 text-base text-[#555555]">
          <li>Live international gold and silver market rates on the day of buyback</li>
          <li>Verified weight and purity of the bullion</li>
          <li>Prevailing market conditions</li>
        </ul>
        <p className="text-base text-[#555555] mt-3">The final price is confirmed after inspection.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#111111] mb-3">Verification</h2>
        <p className="text-base text-[#555555] mb-3">All bullion submitted for buyback is checked for:</p>
        <ul className="list-disc list-inside space-y-1.5 text-base text-[#555555]">
          <li>Weight</li>
          <li>Purity</li>
          <li>Physical condition</li>
        </ul>
        <p className="text-base text-[#555555] mt-3">
          This helps ensure transparency and accurate valuation for both the customer and Tora Bullion.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#111111] mb-3">Buyback Process</h2>
        <p className="text-base text-[#555555] mb-3">The process is simple:</p>
        <ol className="list-decimal list-inside space-y-1.5 text-base text-[#555555]">
          <li>Contact Tora Bullion to request a buyback</li>
          <li>Bring the bullion for inspection and verification</li>
          <li>Price is confirmed based on the live market rate</li>
          <li>Payment is processed once confirmed</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#111111] mb-3">Payment</h2>
        <p className="text-base text-[#555555] leading-relaxed">
          Payments are made through secure and compliant methods. All settlement details are clearly communicated before completion.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#111111] mb-3">Important Information</h2>
        <ul className="list-disc list-inside space-y-1.5 text-base text-[#555555]">
          <li>Jewellery is not accepted.</li>
          <li>Bullion from other sellers is accepted, but subject to verification.</li>
          <li>Market prices change daily.</li>
          <li>The final buyback value is determined at the time of inspection.</li>
          <li>Regulatory and compliance requirements may apply.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#111111] mb-3">Our Commitment</h2>
        <p className="text-base text-[#555555] leading-relaxed">
          Tora Bullion is committed to honest pricing, transparent processes, and building long-term trust with customers buying and selling precious metals in Dubai, UAE.
        </p>
      </section>

    </main>
  )
}
