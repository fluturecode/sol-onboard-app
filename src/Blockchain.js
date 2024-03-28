const Blockchain= () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">What is Blockchain?</h1>
    <p className="mb-4">
      At its core, a blockchain is a distributed database or ledger that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, like Bitcoin, for maintaining a secure and decentralized record of transactions. The innovation with blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party.
    </p>

    <h2 className="text-2xl font-bold mb-3">How Does Blockchain Work?</h2>
    <p className="mb-4">
      One key difference between a typical database and a blockchain is the way the data is structured. A blockchain collects information together in groups, known as blocks, that hold sets of information. Blocks have certain storage capacities and, when filled, are closed and linked to the previously filled block, forming a chain of data known as the "blockchain." All new information that follows that freshly added block is compiled into a newly formed block that will then also be added to the chain once filled.
    </p>

    <h2 className="text-2xl font-bold mb-3">Benefits of Blockchain Technology</h2>
    <ul className="list-disc list-inside mb-4">
      <li>Decentralization</li>
      <li>Transparency</li>
      {/* <li>Security</li> */}
      <li>Improved traceability</li>
    </ul>

    <h2 className="text-2xl font-bold mb-3">Why Does Blockchain Matter?</h2>
    <p>
      Blockchain is a revolutionary technology because it reduces risk, eliminates fraud, and brings transparency in a scalable way for myriad uses. The technology has the potential to transform industries, including finance, healthcare, law, and beyond, by making transactions and processes more democratic, secure, transparent, and efficient.
    </p>
  </div>
);

export default Blockchain;