# No API Keys

You can't use API Keys without vendor lock in. That's impossible. Only try to realize the truth. You are the Key.

In a self sovereign identity (SSI) world, there are no API keys. Instead, your identity is the API key. 

Why is no one doing this? Because the internet lacks an identity layer. Until now.


# GUID, Privacy and Security


Globally unique identifier (GUID)  are a common way to identify things. They are used in databases, APIs, and other systems. They are also used to identify people.

Here a few others UUID v1 - v8, NanoId, Ulid, Sony Snowflake (inspired by Twitter Snowflake), ShardingID (Instagram), KSUID, PushId (Google), XID, ObjectId 

Participant, Handle, Avatar, Member, Client, User


The connecting system is provided a GUID which is used to identify the individual within that system only.

In Web3, GUID are not protected by centralized authorities and their secured databases. These ids are required to support being written to public blockchains for eternity. They must be privacy-preserving identifiers secured by cryptography.

How privacy and security is addressed from each perspective:

System
- The connecting user comes with a UserId which is used to identify the individual across different sessions and store their application data. This UserID may written to a blockchain ledger on the system and track all activity of the same persona on its ledger.
- A connecting user can switch personas which will come with a different GUID. The UserId will appear as a different individual. And the activity written to the ledger will also appear as a different user.
- The system can prompt the user at connection time to give consent to include their ZkPUserId z(pk:digest - is the signed system's encryption-key) that allows the system to track the user across different personas. This is a privacy-preserving value, it is not possible to link it to the user across different systems unless secrets are known. Unless the two systems are from the same provider and the secret entropy keys are known.
  - Each system will have a different ZkPUserId for the same user. If this userID is written to a ledger than all personas will appear as the same individual regardless of which persona connected at the time of the blockchain activity.
  - ZkPOrgUserId - system promises to keep their pk private and to only use to identify across their own system securely. user must give consent. user may revoke consent at any time (System may decide to stop providing service or downgrade their access). 

Individual

z(pk:digest) - need a method where multiple systems can provide their secret into an alg that combines an Atlas secret and the results being both systems can track the same user across different personas. 
- Maybe BLS or ring signatures where we can determine if two pairs exist in the same ring. Or we can recover the same public-key from two different signatures.

ed25519 generates signatures deterministically

Self
    Persona
        User