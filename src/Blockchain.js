const Blockchain = () => (
  <div style={{padding: "20px"}}>
  <h1>What is Blockchain?</h1>
  <p>
    At its core, a blockchain is a distributed database or ledger that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, like Bitcoin, for maintaining a secure and decentralized record of transactions. The innovation with blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party.
  </p>

  <h2>How Does Blockchain Work?</h2>
  <p>
    One key difference between a typical database and a blockchain is the way the data is structured. A blockchain collects information together in groups, known as blocks, that hold sets of information. Blocks have certain storage capacities and, when filled, are closed and linked to the previously filled block, forming a chain of data known as the "blockchain." All new information that follows that freshly added block is compiled into a newly formed block that will then also be added to the chain once filled.
  </p>
  <p>
    Blockchain technology employs decentralized consensus mechanisms like Proof of Work (PoW) or Proof of Stake (PoS) to validate and record transactions. This ensures that each transaction is accurately reflected in the blockchain and cannot be altered, providing a transparent and immutable ledger system.
  </p>

  <h2>Benefits of Blockchain Technology</h2>
  <ul>
    <li><strong>Decentralization:</strong> There's no central authority; it's a distributed and peer-to-peer system.</li>
    <li><strong>Transparency:</strong> Changes to public blockchains are publicly viewable by all parties creating transparency, and all transactions are immutable, meaning they cannot be altered or deleted.</li>
    <li><strong>Security:</strong> Transactions must be agreed upon before they are recorded. After a transaction is approved, it is encrypted and linked to the previous transaction. Along with the fact that information is stored across a network of computers instead of on a single server, this makes it very difficult for hackers to compromise the transaction data.</li>
    <li><strong>Improved traceability:</strong> Every transaction on a blockchain is recorded with an audit trail that shows where an asset came from and every stop it made on its journey. This can be crucial for industries and supply chain management.</li>
  </ul>

  <h2>Why Does Blockchain Matter?</h2>
  <p>
    Blockchain is a revolutionary technology because it reduces risk, eliminates fraud, and brings transparency in a scalable way for myriad uses. The technology has the potential to transform industries, including finance, healthcare, law, and beyond, by making transactions and processes more democratic, secure, transparent, and efficient.
  </p>
</div>
);
export default Blockchain;