declare const AiReports: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly token_id: {
                    readonly type: "string";
                    readonly default: "37493,3484";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token IDs. Click [here](https://api.tokenmetrics.com/api-docs/#/AI%20Reports%20Token%20Info/get_v2_ai_reports_tokens) to access the list of token IDs.";
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly default: "APX,PAAL";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token Symbols. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token symbols.";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 1000;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Limit the number of items in response";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Enables pagination and data retrieval control by skipping a specified number of items before fetching data. Page should be a non-negative integer, with 0 indicating the beginning of the dataset.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [4];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly TOKEN_ID: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [3484];
                            };
                            readonly TOKEN_SYMBOL: {
                                readonly type: "string";
                                readonly examples: readonly ["RIF"];
                            };
                            readonly TOKEN_NAME: {
                                readonly type: "string";
                                readonly examples: readonly ["Rootstock Infrastructure Framework (RIF)"];
                            };
                            readonly INVESTMENT_ANALYSIS_POINTER: {
                                readonly type: "string";
                                readonly examples: readonly ["# Rootstock Infrastructure Framework (RIF) | Bridging Bitcoin and DeFi | Investment Analysis\n\n## Executive Summary\n- The Rootstock Infrastructure Framework (RIF) is a groundbreaking decentralized suite of protocols that enhances Bitcoin's capabilities, enabling the development of decentralized applications (dApps) on the RSK Smart Contract Network.\n- By addressing critical challenges such as scalability, high fees, and limited transaction capacity, RIF positions itself as a vital bridge between Bitcoin's security and Ethereum's programmability.\n- With a total supply of 1 billion RIF tokens and a market cap of approximately $47.27 million, RIF is poised for significant growth, potentially reaching prices between $1.00 and $3.00 as adoption increases.\n- The project boasts a robust community engagement model through the Rootstock Collective DAO, fostering innovation and collaboration in the decentralized finance (DeFi) space.\n\n## About the Project\n\n### Vision\n- RIF aims to simplify blockchain technology complexities, enabling developers to create scalable DeFi products quickly.\n- By leveraging Bitcoin's security and smart contract capabilities, RIF promotes a decentralized digital economy and interoperability among blockchain solutions.\n\n### Problem\n- Bitcoin's limited transaction capacity and high fees hinder its usability for complex applications.\n- The absence of native smart contract functionality in Bitcoin necessitates a solution that provides Turing-complete capabilities while ensuring user-friendly interactions.\n\n### Solution\n- RIF offers a comprehensive suite of open-source protocols, including:\n  - RIF Name Service (RNS) for simplified interactions.\n  - RIF Wallet for crypto lending and payment solutions.\n  - RIF Relay for transaction fee payments using ERC-20 tokens.\n- This holistic approach enhances the usability and accessibility of decentralized applications on the Bitcoin network.\n\n## Market Analysis\n- As of March 2025, RIF's market capitalization ranges between $44.66 million and $48.35 million, with a circulating supply of 1 billion tokens.\n- The Total Addressable Market (TAM) for RIF is closely linked to the growing demand for scalable blockchain solutions in the DeFi sector.\n- RIF competes with Ethereum, Polygon, and Binance Smart Chain (BSC), differentiating itself by combining Bitcoin's security with EVM-compatible smart contract capabilities.\n\n## Features\n- **RIF Name Service (RNS)**: Simplifies blockchain interactions by allowing users to replace complex addresses with human-readable names, enhancing user experience.\n- **RIF Wallet**: An open-source framework that enables developers to build customizable wallets for crypto lending, payments, and savings.\n- **RIF Relay**: Facilitates transaction fee payments using ERC-20 tokens, improving accessibility for users who may not hold native tokens.\n- **RIF Rollup**: Utilizes zkRollup technology for fast and scalable low-cost payments, enhancing transaction throughput on the network.\n- **RIF Flyover**: Enables quick transfers between Bitcoin and RSK, ensuring liquidity and seamless asset movement across platforms.\n- **Governance via RIF Token**: The RIF token serves as a utility token, allowing holders to participate in governance through the Rootstock Collective DAO.\n- **Decentralized Infrastructure Services**: Offers a suite of services, including identity management, storage, and data feeds, to support diverse blockchain applications.\n\n## Technology\n- RIF operates as a service layer on the RSK blockchain, utilizing Bitcoin's security through merged mining, supporting EVM-compatible smart contracts.\n- The architecture includes a decentralized infrastructure with services for payments, storage, and identity management, enhancing scalability and efficiency for dApps.\n- Key technical strengths include:\n  - **Modular Design**: RIF's components are designed for easy updates and maintenance, ensuring high code quality and reliability.\n  - **Security Focus**: The codebase is open-source and has undergone audits by reputable firms, enhancing trust and transparency.\n  - **User-Centric Innovations**: The RIF Name Service and Wallet frameworks significantly improve user accessibility and engagement with blockchain technology.\n\n## Conclusion\n- The Rootstock Infrastructure Framework (RIF) presents a compelling investment opportunity, combining Bitcoin's security with advanced DeFi functionalities.\n- Its innovative architecture, strong community engagement, and focus on usability position RIF as a significant player in the evolving blockchain landscape.\n- With a growing user base and strategic initiatives aimed at increasing adoption, RIF is well-positioned for future growth, making it an attractive option for investors seeking exposure to the DeFi sector."];
                            };
                            readonly INVESTMENT_ANALYSIS: {
                                readonly type: "string";
                                readonly examples: readonly ["# Rootstock Infrastructure Framework (RIF) | Bridging Bitcoin and DeFi | Investment Analysis\n\n## Executive Summary\nThe Rootstock Infrastructure Framework (RIF) is revolutionizing the blockchain landscape by enabling decentralized applications (dApps) on the Bitcoin network. By combining Bitcoin's unparalleled security with Ethereum's programmability, RIF addresses critical challenges in scalability and user accessibility, positioning itself as a pivotal player in the decentralized finance (DeFi) sector. With a robust ecosystem and a total supply of 1 billion RIF tokens, the framework is poised for significant growth as it attracts developers and users alike.\n\nRIF's innovative protocols, such as the RIF Name Service and RIF Wallet, enhance usability while fostering community engagement through the Rootstock Collective DAO. As the demand for scalable blockchain solutions continues to rise, RIF's unique offerings and strategic positioning could drive its market capitalization to new heights, potentially reaching prices between $1.00 and $3.00 in the long term. \n\n## About the Project\n\n### Vision\nRIF envisions a decentralized digital economy where developers can effortlessly build scalable DeFi products, simplifying the complexities of blockchain technology. By leveraging Bitcoin's security and the capabilities of smart contracts, RIF aims to promote interoperability and drive widespread adoption of blockchain solutions.\n\n### Problem\nThe project addresses significant challenges within the blockchain ecosystem, including Bitcoin's limited transaction capacity and high fees that hinder its use for complex applications. Additionally, the absence of native smart contract functionality in Bitcoin necessitates a solution that offers Turing-complete capabilities while ensuring user-friendly interactions with blockchain resources.\n\n### Solution\nRIF provides a comprehensive suite of open-source protocols and services designed to facilitate the development of scalable DeFi products. Key components include the RIF Name Service (RNS) for simplified blockchain interactions, the RIF Wallet for crypto lending and payment services, and the RIF Relay for transaction fee payments using ERC-20 tokens. This holistic approach enhances the usability and accessibility of decentralized applications on the Bitcoin network.\n\n## Market Analysis\nAs of March 2025, RIF's market capitalization ranges between $44.66 million and $48.35 million, with a circulating supply of 1 billion tokens. The Total Addressable Market (TAM) for RIF is closely tied to the growing demand for scalable blockchain solutions, particularly in the DeFi sector. Growth projections suggest that RIF could reach prices between $1.00 and $3.00 in the long term, driven by increased adoption and strategic partnerships.\n\nRIF competes with notable projects like Ethereum, Polygon, and Binance Smart Chain (BSC). While Ethereum remains the leading platform for smart contracts, RIF differentiates itself by combining Bitcoin's security with EVM-compatible smart contract capabilities, enabling it to serve as a bridge between Bitcoin's robust security and the advanced functionalities offered by Ethereum-based platforms.\n\n## Features\n- **RIF Name Service (RNS)**: Simplifies blockchain interactions by allowing users to replace complex addresses with human-readable names, enhancing user experience.\n- **RIF Wallet**: An open-source framework that enables developers to build customizable wallets for crypto lending, payments, and savings.\n- **RIF Relay**: Facilitates transaction fee payments using ERC-20 tokens, improving accessibility for users who may not hold native tokens.\n- **RIF Rollup**: Utilizes zkRollup technology for fast and scalable low-cost payments, enhancing transaction throughput on the network.\n- **RIF Flyover**: Enables quick transfers between Bitcoin and RSK, ensuring liquidity and seamless asset movement across platforms.\n- **Governance via RIF Token**: The RIF token serves as a utility token, allowing holders to participate in governance through the Rootstock Collective DAO.\n- **Decentralized Infrastructure Services**: Offers a suite of services, including identity management, storage, and data feeds, to support diverse blockchain applications.\n\n## Technology\nRIF operates as a service layer on the RSK blockchain, leveraging Bitcoin's security through merged mining. The architecture supports EVM-compatible smart contracts, allowing developers to utilize existing Ethereum tools and languages. RIF's open-source codebase promotes transparency and community collaboration, with a focus on security validated by audits from reputable firms.\n\nKey technical strengths include:\n- **RIF Name Service (RNS)**: Enhances usability by replacing complex addresses with human-readable names.\n- **RIF Wallet**: A full-stack library that integrates crypto lending, saving, and payment services.\n- **RIF Rollup**: Employs zkRollup technology for fast, low-cost transactions, improving scalability.\n- **RIF Relay**: Allows transaction fee payments using ERC-20 tokens, streamlining user interactions.\n- **Modular Architecture**: Facilitates easier updates and maintenance, ensuring high code quality and reliability.\n\n## Conclusion\nThe Rootstock Infrastructure Framework (RIF) presents a compelling investment opportunity, combining robust fundamentals with innovative technology. Its unique positioning as a bridge between Bitcoin's security and Ethereum's programmability, coupled with its comprehensive suite of services, positions RIF for significant growth in the expanding DeFi landscape. As the project continues to evolve and attract a dedicated community, RIF's potential to drive mainstream adoption of decentralized finance solutions makes it a noteworthy contender in the blockchain space."];
                            };
                            readonly DEEP_DIVE: {
                                readonly type: "string";
                                readonly examples: readonly ["# Rootstock Infrastructure Framework (RIF) | Bridging Bitcoin and DeFi | Crypto Deep Dive\n\n## Executive Summary\nThe Rootstock Infrastructure Framework (RIF) is a decentralized suite of protocols designed to enhance Bitcoin's functionality by enabling the development of decentralized applications (dApps) on the Rootstock (RSK) Smart Contract Network. RIF addresses critical challenges in scalability, smart contract functionality, and user accessibility, positioning itself as a bridge between Bitcoin's security and Ethereum's programmability. With a total supply of 1 billion RIF tokens, the framework supports various decentralized services, including payment solutions and identity management, while fostering community engagement through the Rootstock Collective DAO.\n\n## About the Project\n\n### Vision\nRIF's vision is to create a seamless user experience that simplifies the complexities of blockchain technology, enabling developers to rapidly build scalable decentralized finance (DeFi) products. By leveraging the security of Bitcoin and the capabilities of smart contracts, RIF aims to foster a decentralized digital economy that promotes interoperability and broad adoption of blockchain solutions.\n\n### Problem\nRIF addresses several key challenges within the blockchain ecosystem, including Bitcoin's limited transaction capacity and high fees, which hinder its adoption for complex applications. Additionally, the lack of native smart contract capabilities in Bitcoin necessitates a solution that can provide Turing-complete functionality while ensuring user-friendly interactions with blockchain resources.\n\n### Solution\nRIF offers a comprehensive suite of open-source protocols and services that facilitate the development of scalable DeFi products. Key components include the RIF Name Service (RNS) for simplified blockchain interactions, the RIF Wallet for crypto lending and payment services, and the RIF Relay for transaction fee payments using ERC-20 tokens. This holistic approach enhances the usability and accessibility of decentralized applications on the Bitcoin network.\n\n## Market Analysis\nAs of March 2025, RIF's market capitalization ranges between $44.66 million and $48.35 million, with a circulating supply of 1 billion tokens. The Total Addressable Market (TAM) for RIF is closely tied to the growing demand for scalable blockchain solutions, particularly in the DeFi sector. Growth projections suggest that RIF could reach prices between $1.00 and $3.00 in the long term, driven by increased adoption and strategic partnerships.\n\nRIF competes with notable projects like Ethereum, Polygon, and Binance Smart Chain (BSC). While Ethereum remains the leading platform for smart contracts, RIF differentiates itself by combining Bitcoin's security with EVM-compatible smart contract capabilities. This unique positioning enables RIF to serve as a bridge between Bitcoin's robust security and the advanced functionalities offered by Ethereum-based platforms.\n\n## Features\n- **RIF Name Service (RNS)**: Simplifies blockchain interactions by allowing users to replace complex addresses with human-readable names, enhancing user experience.\n- **RIF Wallet**: An open-source framework that enables developers to build customizable wallets for crypto lending, payments, and savings.\n- **RIF Relay**: Facilitates transaction fee payments using ERC-20 tokens, improving accessibility for users who may not hold native tokens.\n- **RIF Rollup**: Utilizes zkRollup technology for fast and scalable low-cost payments, enhancing transaction throughput on the network.\n- **RIF Flyover**: Enables quick transfers between Bitcoin and RSK, ensuring liquidity and seamless asset movement across platforms.\n- **Governance via RIF Token**: The RIF token serves as a utility token, allowing holders to participate in governance through the Rootstock Collective DAO.\n- **Decentralized Infrastructure Services**: Offers a suite of services, including identity management, storage, and data feeds, to support diverse blockchain applications.\n\n## Token\nThe RIF token is an ERC677 utility token with a total supply of 1 billion tokens. The circulating supply matches the total supply, indicating that all tokens are available for use. As of March 2025, RIF's market cap is approximately $47.27 million, with a trading price ranging from $0.044 to $0.05.\n\nRIF tokens are utilized within the ecosystem for accessing services, participating in governance, and staking to earn rewards. The tokenomics include a focus on community engagement through the Rootstock Collective, where RIF tokens can be staked to mint stRIF tokens, granting governance rights and rewards.\n\n## Traction\nRIF's current user base is growing, with a reported 24-hour trading volume of around $3 million to $4.68 million. The Total Value Locked (TVL) in the RSK ecosystem peaked at approximately $229 million in 2021, indicating ongoing interest and activity. The community is engaged through the Rootstock Collective, which allows users to participate in governance and earn rewards by staking RIF tokens.\n\nRIF's presence on social media platforms and community forums fosters engagement and keeps users informed about project developments. While specific metrics on community size are not available, the integration with the Rootstock Collective suggests a dedicated and active community.\n\n## Team\nRIF is backed by a team of experienced professionals in blockchain technology and finance. Key figures include Diego Gutierrez Zaldivar, co-founder and CEO of RIF Labs, and Sergio Demian Lerner, Chief Scientist and co-founder of Rootstock. Their expertise in developing scalable decentralized applications has been instrumental in shaping RIF's mission to enhance Bitcoin's functionality through smart contracts.\n\n## Investors\nRIF is supported by IOV Labs, which provides resources and expertise for the development of the Rootstock ecosystem. The Rootstock Collective has secured $10 million in funding for its treasury, facilitating grants for new Bitcoin projects. While specific notable investors are not detailed, the collective's funding structure emphasizes community-driven development and governance.\n\n## Conclusion\nThe Rootstock Infrastructure Framework (RIF) stands out as a pivotal project in the blockchain space, leveraging Bitcoin's security to enhance decentralized finance capabilities. With its comprehensive suite of services, active community engagement, and strategic positioning in the market, RIF has significant growth potential. As the project continues to evolve, it is well-positioned to bridge the gap between Bitcoin's robust security and the advanced functionalities of decentralized applications, making it a key player in the future of blockchain technology."];
                            };
                            readonly CODE_REVIEW: {
                                readonly type: "string";
                                readonly examples: readonly ["# Rootstock Infrastructure Framework (RIF) | Bridging Bitcoin and DeFi | Code Review\n\n## Introduction\nThe Rootstock Infrastructure Framework (RIF) is a decentralized suite of protocols designed to enhance Bitcoin's functionality by enabling the development of decentralized applications (dApps) on the Rootstock (RSK) Smart Contract Network. Leveraging Bitcoin's security, RIF provides an Ethereum Virtual Machine (EVM)-compatible environment that facilitates the creation of scalable decentralized finance (DeFi) products. This framework aims to simplify blockchain interactions for developers and users alike, bridging the gap between complex technology and user-friendly experiences.\n\n## Innovation\nRIF introduces several innovative components, including the RIF Name Service (RNS), which replaces complex blockchain addresses with human-readable names, enhancing usability. The RIF Wallet serves as a full-stack library for integrating crypto lending, saving, and payment services, while RIF Rollup employs zkRollup technology for fast, low-cost transactions. Additionally, RIF Relay allows users to pay transaction fees using ERC-20 tokens, further streamlining interactions within the ecosystem. These innovations position RIF as a key player in the DeFi landscape.\n\n## Architecture\nRIF operates as a service layer on the RSK blockchain, utilizing Bitcoin's security through merged mining. The architecture supports EVM-compatible smart contracts, allowing developers to leverage existing Ethereum tools and languages. The framework is built on a decentralized infrastructure that includes services for payments, storage, and identity management. RIF's two-way peg mechanism facilitates seamless conversion between Bitcoin and RBTC, ensuring liquidity and security for users. This architecture enhances the scalability and efficiency of dApps built on RSK.\n\n## Code Quality\nRIF's codebase is open-source, promoting transparency and community collaboration. The framework is developed with a focus on security, as evidenced by audits conducted by reputable firms such as Coinspect. The use of the ERC677 standard for the RIF token enhances interaction efficiency between contracts and addresses. Furthermore, the integration of RIF components, such as RIF Wallet and RNS, demonstrates a modular approach that allows for easier updates and maintenance, ensuring high code quality and reliability.\n\n## Product Roadmap\nWhile specific future roadmaps are not detailed, RIF's ongoing development focuses on expanding its service offerings and enhancing user experience. Initiatives include increasing integration with leading DeFi protocols and fostering community engagement through the Rootstock Collective DAO. The introduction of stablecoins like USDRIF, pegged to the US dollar, is also part of RIF's strategy to provide stable financial instruments within the ecosystem. These developments aim to drive adoption and improve the overall functionality of the RIF framework.\n\n## Usability\nRIF emphasizes user accessibility by providing intuitive interfaces and services that simplify blockchain interactions. The RIF Name Service (RNS) significantly reduces the complexity of blockchain addresses, making it easier for users to engage with dApps. Additionally, the RIF Wallet framework allows developers to create customizable wallets that cater to diverse user needs. By focusing on usability, RIF aims to attract a broader audience, including those unfamiliar with cryptocurrency, thereby fostering mainstream adoption of decentralized finance.\n\n## Team\nRIF is backed by a team of experienced professionals, including co-founders Diego Gutierrez Zaldivar and Sergio Demian Lerner, who have extensive backgrounds in blockchain technology and cryptography. Their leadership is complemented by a skilled team at IOV Labs, which provides resources and support to developers building on RIF. The team's commitment to fostering innovation and community engagement is evident in their initiatives aimed at enhancing the RIF ecosystem and promoting the adoption of decentralized solutions.\n\n## Conclusion\nThe Rootstock Infrastructure Framework (RIF) presents a robust solution for enhancing Bitcoin's capabilities through smart contracts and decentralized applications. Its innovative architecture, high code quality, and focus on usability position it as a significant player in the DeFi space. While challenges remain in achieving widespread adoption, RIF's ongoing developments and community-driven initiatives suggest a promising future for bridging the gap between Bitcoin's security and the flexibility of decentralized finance."];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AllTrendIndicators: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly token_id: {
                    readonly type: "string";
                    readonly default: "3375,3306";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token IDs. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token IDs.";
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly default: "BTC,ETH";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token Symbols. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token symbols.";
                };
                readonly indicator: {
                    readonly type: "string";
                    readonly default: "mama,mom";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated indicator name. Click [here](https://api.tokenmetrics.com/api-docs/#/Technical%20Indicators/get_v2_technical_indicators) to access the list of technical indicators.";
                };
                readonly startDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly default: "2023-10-01";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Start Date accepts date as a string - YYYY-MM-DD format";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly default: "2023-10-10";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "End Date accepts date as a string - YYYY-MM-DD format.";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 1000;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Limit the number of items in response";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Enables pagination and data retrieval control by skipping a specified number of items before fetching data. Page should be a non-negative integer, with 0 indicating the beginning of the dataset.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1000];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly TOKEN_ID: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [4];
                            };
                            readonly TOKEN_NAME: {
                                readonly type: "string";
                                readonly examples: readonly ["Zoidpay"];
                            };
                            readonly SYMBOL: {
                                readonly type: "string";
                                readonly examples: readonly ["zpay"];
                            };
                            readonly DATE: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-06-11"];
                            };
                            readonly INDICATOR: {
                                readonly type: "string";
                                readonly examples: readonly ["adosc"];
                            };
                            readonly TREND: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [-1];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AnnualizedHistoricalVolatilityCharts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly timeFrame: {
                    readonly type: "string";
                    readonly default: "MAX";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Time duration for the market charts. Accepted values: 1W, 1M, 3M, Y, MAX";
                };
                readonly chartFilters: {
                    readonly type: "string";
                    readonly default: "market_cap, volatility_index, 90th_percentile, 10th_percentile";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "**Filters:** market_cap, volatility_index, 90th_percentile, 10th_percentile";
                };
            };
            readonly required: readonly ["timeFrame", "chartFilters"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly chartUrl: {
                    readonly type: "string";
                    readonly examples: readonly ["https://tm-prtnr-plan.s3.amazonaws.com/data/internal/partnerplan/marketCharts/annualizedHistoricalVolatilityCharts/chart_1708519983951.png"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const BitcoinVsAltcoinSeasonCharts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly timeFrame: {
                    readonly type: "string";
                    readonly default: "Y";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Time duration for the market charts. Accepted values: 1W, 1M, 3M, Y, MAX";
                };
                readonly chartFilters: {
                    readonly type: "string";
                    readonly default: "altcoin_indicator,altcoin_season,bitcoin_season";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "**Filters:**altcoin_indicator,altcoin_season,bitcoin_season";
                };
            };
            readonly required: readonly ["timeFrame", "chartFilters"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly chartUrl: {
                    readonly type: "string";
                    readonly examples: readonly ["https://tm-prtnr-plan.s3.amazonaws.com/data/internal/partnerplan/marketCharts/bitcoinVsAltcoinSeasonCharts/chart_1708519796455.png"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Correlation: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly token_id: {
                    readonly type: "string";
                    readonly default: "3375,3306";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token IDs. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token IDs.";
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly default: "BTC,ETH";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token Symbols. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token symbols.";
                };
                readonly category: {
                    readonly type: "string";
                    readonly default: "layer-1,nft";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated category name. Click [here](https://api.tokenmetrics.com/api-docs/#/Categories/get_v2_categories) to access the list of categories.";
                };
                readonly exchange: {
                    readonly type: "string";
                    readonly default: "gate,binance";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated exchange name. Click [here](https://api.tokenmetrics.com/api-docs/#/Exchanges/get_v2_exchanges) to access the list of exchanges.";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 1000;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Limit the number of items in response";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Enables pagination and data retrieval control by skipping a specified number of items before fetching data. Page should be a non-negative integer, with 0 indicating the beginning of the dataset.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [972];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly TOKEN_ID: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [28950];
                            };
                            readonly TOKEN_NAME: {
                                readonly type: "string";
                                readonly examples: readonly ["Gosleep Zzz"];
                            };
                            readonly TOKEN_SYMBOL: {
                                readonly type: "string";
                                readonly examples: readonly ["ZZZ"];
                            };
                            readonly DATE: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-11-08"];
                            };
                            readonly TOP_CORRELATION: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly correlation: {
                                            readonly type: "number";
                                            readonly default: 0;
                                            readonly examples: readonly [0.846];
                                        };
                                        readonly token: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Fantom"];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CryptoInvestors: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 1000;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Limit the number of items in response";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Enables pagination and data retrieval control by skipping a specified number of items before fetching data. Page should be a non-negative integer, with 0 indicating the beginning of the dataset.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [647];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly INVESTOR: {
                                readonly type: "string";
                                readonly examples: readonly ["Passport Capital"];
                            };
                            readonly INVESTOR_SCORE: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [10];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const DailyOhlcv: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly token_id: {
                    readonly type: "string";
                    readonly default: "3375";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token IDs. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token IDs.";
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly default: "BTC";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token Symbols. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token symbols.";
                };
                readonly token_name: {
                    readonly type: "string";
                    readonly default: "Bitcoin";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Crypto Asset Names (e.g., Bitcoin, Ethereum). Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token names.";
                };
                readonly startDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly default: "2025-01-01";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Start Date accepts date as a string - YYYY-MM-DD format. Note: The Start Date cannot be earlier than the past 30 days from the current date.";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly default: "2025-01-23";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "End Date accepts date as a string - YYYY-MM-DD format.";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 10;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Limit the number of items in response";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Enables pagination and data retrieval control by skipping a specified number of items before fetching data. Page should be a non-negative integer, with 0 indicating the beginning of the dataset.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [10];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly TOKEN_ID: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [3375];
                            };
                            readonly TOKEN_NAME: {
                                readonly type: "string";
                                readonly examples: readonly ["Bitcoin"];
                            };
                            readonly TOKEN_SYMBOL: {
                                readonly type: "string";
                                readonly examples: readonly ["BTC"];
                            };
                            readonly DATE: {
                                readonly type: "string";
                                readonly examples: readonly ["2025-01-23T00:00:00.000Z"];
                            };
                            readonly OPEN: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [103821];
                            };
                            readonly HIGH: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [106063];
                            };
                            readonly LOW: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [101225];
                            };
                            readonly CLOSE: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [103966];
                            };
                            readonly VOLUME: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [108720681775.491];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const HourlyOhlcv: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly token_id: {
                    readonly type: "string";
                    readonly default: "3375,3306";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token IDs. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token IDs.";
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly default: "BTC,ETH";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token Symbols. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token symbols.";
                };
                readonly token_name: {
                    readonly type: "string";
                    readonly default: "Bitcoin, Ethereum";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Crypto Asset Names (e.g., Bitcoin, Ethereum). Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token names.";
                };
                readonly startDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly default: "2025-03-01";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Start Date accepts date as a string - YYYY-MM-DD format. Note: The Start Date cannot be earlier than the past 30 days from the current date.";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly default: "2025-03-20";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "End Date accepts date as a string - YYYY-MM-DD format.";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 10;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Limit the number of items in response";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Enables pagination and data retrieval control by skipping a specified number of items before fetching data. Page should be a non-negative integer, with 0 indicating the beginning of the dataset.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [10];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly TOKEN_ID: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [3375];
                            };
                            readonly TOKEN_NAME: {
                                readonly type: "string";
                                readonly examples: readonly ["Bitcoin"];
                            };
                            readonly TOKEN_SYMBOL: {
                                readonly type: "string";
                                readonly examples: readonly ["BTC"];
                            };
                            readonly TIMESTAMP: {
                                readonly type: "string";
                                readonly examples: readonly ["2025-03-19T23:26:09.454Z"];
                            };
                            readonly OPEN: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [85816];
                            };
                            readonly HIGH: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [86537];
                            };
                            readonly LOW: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [85816];
                            };
                            readonly CLOSE: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [86255];
                            };
                            readonly VOLUME: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [31258975021.50926];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const IndexHoldings: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly default: "trader";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Type of market perspective, either trader or investor";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 10;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Limit the number of items in response";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Enables pagination and data retrieval control by skipping a specified number of items before fetching data. Page should be a non-negative integer, with 0 indicating the beginning of the dataset.";
                };
            };
            readonly required: readonly ["type"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [5];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly NAME: {
                                readonly type: "string";
                                readonly examples: readonly ["GST-SOL"];
                            };
                            readonly ICON: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly large: {
                                        readonly type: "string";
                                        readonly examples: readonly ["https://coin-images.coingecko.com/coins/images/21841/large/gst.png?1696521196"];
                                    };
                                    readonly small: {
                                        readonly type: "string";
                                        readonly examples: readonly ["https://coin-images.coingecko.com/coins/images/21841/small/gst.png?1696521196"];
                                    };
                                    readonly thumb: {
                                        readonly type: "string";
                                        readonly examples: readonly ["https://coin-images.coingecko.com/coins/images/21841/thumb/gst.png?1696521196"];
                                    };
                                };
                            };
                            readonly WEIGHT: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [25];
                            };
                            readonly PCT_CHANGE: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [-0.12];
                            };
                            readonly CG_ID: {
                                readonly type: "string";
                                readonly examples: readonly ["green-satoshi-token"];
                            };
                            readonly CHAIN_ID: {
                                readonly type: "string";
                                readonly examples: readonly ["1151111081099710"];
                            };
                            readonly TOKEN_ADDRESS: {
                                readonly type: "string";
                                readonly examples: readonly ["AFbX8oGjGpmVFywbVouvhQSRmiW2aR1mohfahi4Y2AdB"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const IndexSpecificPerformance: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly indexName: {
                    readonly type: "string";
                    readonly default: "meme";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Index Name for Retrieving the performance data";
                };
                readonly startDate: {
                    readonly type: "string";
                    readonly default: "2025-01-15";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Start Date accepts date as a string - YYYY-MM-DD format.";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly default: "2025-03-28";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "End Date accepts date as a string - YYYY-MM-DD format.";
                };
            };
            readonly required: readonly ["indexName", "startDate", "endDate"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [63];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly DATE: {
                                readonly type: "string";
                                readonly examples: readonly ["2025-01-15T00:00:00.000Z"];
                            };
                            readonly INDEX_CUMULATIVE_ROI: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [0.3804498794];
                            };
                            readonly MARKET_CAP: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [34419357.7272222];
                            };
                            readonly VOLUME: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [7786369.1624264];
                            };
                            readonly FDV: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [34324738.9921017];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const IndicesIndexAllocationCharts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly category: {
                    readonly type: "string";
                    readonly default: "trader";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Type of market perspective, either trader or investor";
                };
            };
            readonly required: readonly ["category"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly chartUrl: {
                    readonly type: "string";
                    readonly examples: readonly ["https://tm-prtnr-plan.s3.amazonaws.com/data/internal/partnerplan/indices/indicesIndexAllocationcharts/chart_1708517380012.png"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const IndicesPerformance: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly default: "trader";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Type of market perspective, either trader or investor";
                };
                readonly startDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly default: "2025-01-15";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Start Date accepts date as a string - YYYY-MM-DD format.";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly default: "2025-03-28";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "End Date accepts date as a string - YYYY-MM-DD format.";
                };
            };
            readonly required: readonly ["type", "startDate", "endDate"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [63];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly DATE: {
                                readonly type: "string";
                                readonly examples: readonly ["2025-01-15T00:00:00.000Z"];
                            };
                            readonly INDEX_CUMULATIVE_ROI: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [0.3853318362];
                            };
                            readonly MARKET_CAP: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [580194141.65945];
                            };
                            readonly VOLUME: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [32676385.998644];
                            };
                            readonly FDV: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [625247551.171164];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const IndicesRoiCharts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly category: {
                    readonly type: "string";
                    readonly default: "trader";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Type of market perspective, either trader or investor";
                };
                readonly timeFrame: {
                    readonly type: "string";
                    readonly default: "MAX";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Time duration for the market charts. Accepted values: 1W, 1M, 3M, Y, YTD, MAX";
                };
                readonly chartFilters: {
                    readonly type: "string";
                    readonly default: "backtested_roi, index_roi,btc_roi,total_market_roi";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "**Filters:** backtested_roi,index_roi,btc_roi,total_market_roi";
                };
            };
            readonly required: readonly ["category", "timeFrame", "chartFilters"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly chartUrl: {
                    readonly type: "string";
                    readonly examples: readonly ["https://tm-prtnr-plan.s3.amazonaws.com/data/internal/partnerplan/indices/indicesRoicharts/chart_1708438004713.png"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const IndicesTransaction: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly default: "trader";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Type of market perspective, either trader or investor";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 10;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Limit the number of items in response";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Enables pagination and data retrieval control by skipping a specified number of items before fetching data. Page should be a non-negative integer, with 0 indicating the beginning of the dataset.";
                };
            };
            readonly required: readonly ["type"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly DATE: {
                                readonly type: "string";
                                readonly examples: readonly ["2025-03-17T00:00:00.000Z"];
                            };
                            readonly TOKEN_ID: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [42356];
                            };
                            readonly TOKEN_NAME: {
                                readonly type: "string";
                                readonly examples: readonly ["PYTHIA"];
                            };
                            readonly TOKEN_SYMBOL: {
                                readonly type: "string";
                                readonly examples: readonly ["PYTHIA"];
                            };
                            readonly ICON: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly large: {
                                        readonly type: "string";
                                        readonly examples: readonly ["https://coin-images.coingecko.com/coins/images/53301/large/PYTHIA-Coingecko.png?1736062694"];
                                    };
                                    readonly small: {
                                        readonly type: "string";
                                        readonly examples: readonly ["https://coin-images.coingecko.com/coins/images/53301/small/PYTHIA-Coingecko.png?1736062694"];
                                    };
                                    readonly thumb: {
                                        readonly type: "string";
                                        readonly examples: readonly ["https://coin-images.coingecko.com/coins/images/53301/thumb/PYTHIA-Coingecko.png?1736062694"];
                                    };
                                };
                            };
                            readonly ACTION: {
                                readonly type: "string";
                                readonly examples: readonly ["Decrease"];
                            };
                            readonly TRANSACTION_SIZE_IN_PCT: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [7.537089421];
                            };
                            readonly TRANSACTION_SIZE_IN_USD: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [0.2430624743];
                            };
                            readonly TRANSACTION_SIZE_IN_TOKENS: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [20.794760924];
                            };
                            readonly TIMESTAMP: {
                                readonly type: "string";
                                readonly examples: readonly ["2025-03-17T00:00:00.000Z"];
                            };
                            readonly TOTAL_COUNT: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [1];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const InvestorGrades: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly token_id: {
                    readonly type: "string";
                    readonly default: "3375,3306";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token IDs. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token IDs.";
                };
                readonly startDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly default: "2025-01-01";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Start Date accepts date as a string - YYYY-MM-DD format";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly default: "2025-02-27";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "End Date accepts date as a string - YYYY-MM-DD format.";
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly default: "BTC,ETH";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token Symbols. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token symbols.";
                };
                readonly category: {
                    readonly type: "string";
                    readonly default: "layer-1,nft";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated category name. Click [here](https://api.tokenmetrics.com/api-docs/#/Categories/get_v2_categories) to access the list of categories.";
                };
                readonly exchange: {
                    readonly type: "string";
                    readonly default: "binance,gate";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated exchange name. Click [here](https://api.tokenmetrics.com/api-docs/#/Exchanges/get_v2_exchanges) to access the list of exchanges.";
                };
                readonly marketcap: {
                    readonly type: "string";
                    readonly default: "100";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Minimum MarketCap in $";
                };
                readonly fdv: {
                    readonly type: "string";
                    readonly default: "100";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Minimum fully diluted valuation in $";
                };
                readonly volume: {
                    readonly type: "string";
                    readonly default: "100";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Minimum 24h trading volume in $";
                };
                readonly investorGrade: {
                    readonly type: "string";
                    readonly default: "70";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Minimum TM Investor Grade";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 1000;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Limit the number of items in response";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Enables pagination and data retrieval control by skipping a specified number of items before fetching data. Page should be a non-negative integer, with 0 indicating the beginning of the dataset.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [10];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly TOKEN_ID: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [3455];
                            };
                            readonly TOKEN_NAME: {
                                readonly type: "string";
                                readonly examples: readonly ["aelf"];
                            };
                            readonly TOKEN_SYMBOL: {
                                readonly type: "string";
                                readonly examples: readonly ["ELF"];
                            };
                            readonly DATE: {
                                readonly type: "string";
                                readonly examples: readonly ["2024-04-29"];
                            };
                            readonly TM_INVESTOR_GRADE: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [62.83];
                            };
                            readonly TM_INVESTOR_GRADE_7D_PCT_CHANGE: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [0.54];
                            };
                            readonly FUNDAMENTAL_GRADE: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [75.39];
                            };
                            readonly TECHNOLOGY_GRADE: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [74.37];
                            };
                            readonly VALUATION_GRADE: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [35.6];
                            };
                            readonly DEFI_USAGE_SCORE: {};
                            readonly COMMUNITY_SCORE: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [6.02];
                            };
                            readonly EXCHANGE_SCORE: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [10];
                            };
                            readonly VC_SCORE: {};
                            readonly TOKENOMICS_SCORE: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [10];
                            };
                            readonly DEFI_SCANNER_SCORE: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [10];
                            };
                            readonly ACTIVITY_SCORE: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [8.16];
                            };
                            readonly SECURITY_SCORE: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [4.1];
                            };
                            readonly REPOSITORY_SCORE: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [7.8];
                            };
                            readonly COLLABORATION_SCORE: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [7.4];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const InvestorIndices: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 1000;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Limit the number of items in response";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Enables pagination and data retrieval control by skipping a specified number of items before fetching data. Page should be a non-negative integer, with 0 indicating the beginning of the dataset.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [40];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly PORTFOLIO_DATE: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-01-01"];
                            };
                            readonly TOKEN_ID: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [3306];
                            };
                            readonly TOKEN_NAME: {
                                readonly type: "string";
                                readonly examples: readonly ["Ethereum"];
                            };
                            readonly TOKEN_SYMBOL: {
                                readonly type: "string";
                                readonly examples: readonly ["ETH"];
                            };
                            readonly INDEX_WEIGHT: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [0.007720578744];
                            };
                            readonly INITIAL_PRICE: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [1200.65];
                            };
                            readonly AMOUNT_OF_TOKENS: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [0.06430332523];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const MarketBullAndBearCharts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly chartUrl: {
                    readonly type: "string";
                    readonly examples: readonly ["https://tm-prtnr-plan.s3.amazonaws.com/data/internal/partnerplan/marketCharts/bullAndBearCharts/chart_1708518469588.png"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const MarketMetrics: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly startDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly default: "2023-10-01";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Start Date accepts date as a string - YYYY-MM-DD format";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly default: "2023-10-10";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "End Date accepts date as a string - YYYY-MM-DD format.";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 1000;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Limit the number of items in response";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Enables pagination and data retrieval control by skipping a specified number of items before fetching data. Page should be a non-negative integer, with 0 indicating the beginning of the dataset.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [9];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly DATE: {
                                readonly type: "string";
                                readonly examples: readonly ["2022-07-01"];
                            };
                            readonly TOTAL_CRYPTO_MCAP: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [911873217283.901];
                            };
                            readonly TM_GRADE_PERC_HIGH_COINS: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [4.608294931];
                            };
                            readonly TM_GRADE_SIGNAL: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly LAST_TM_GRADE_SIGNAL: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [-1];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const MarketMoversCharts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly chartFilters: {
                    readonly type: "string";
                    readonly default: "negativeDailyPricePercentageChange,positiveDailyPricePercentageChange";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "**Filters:** negativeDailyPricePercentageChange,positiveDailyPricePercentageChange";
                };
            };
            readonly required: readonly ["chartFilters"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly chartUrl: {
                    readonly type: "string";
                    readonly examples: readonly ["https://tm-prtnr-plan.s3.amazonaws.com/data/internal/partnerplan/marketCharts/marketMoversCharts/chart_1708521015929.png"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const MarketPercentOfBullishTmGrades: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly timeFrame: {
                    readonly type: "string";
                    readonly default: "Y";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Time duration for the market charts. Accepted values: 1W, 1M, 3M, Y, MAX";
                };
                readonly chartFilters: {
                    readonly type: "string";
                    readonly default: "total_crypto_market,  percent_of_bullish_tm_grades";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "**Filters:** total_crypto_market,  percent_of_bullish_tm_grades";
                };
            };
            readonly required: readonly ["timeFrame", "chartFilters"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly chartUrl: {
                    readonly type: "string";
                    readonly examples: readonly ["https://tm-prtnr-plan.s3.amazonaws.com/data/internal/partnerplan/marketCharts/totalCryptoMarketCapCharts/chart_1708518721963.png"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const MarketPercentOfBullishVsBearishCharts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly chartUrl: {
                    readonly type: "string";
                    readonly examples: readonly ["https://tm-prtnr-plan.s3.amazonaws.com/data/internal/partnerplan/marketCharts/percentOfBullishVsBearishCharts/chart_1708518157748.png"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const MarketTmGradeSignal: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly timeFrame: {
                    readonly type: "string";
                    readonly default: "Y";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Time duration for the market charts. Accepted values: 1W, 1M, 3M, Y, MAX";
                };
                readonly chartFilters: {
                    readonly type: "string";
                    readonly default: "total_crypto_market,  bullish, bearish";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "**Filters:** total_crypto_market,  bullish, bearish";
                };
            };
            readonly required: readonly ["timeFrame", "chartFilters"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly chartUrl: {
                    readonly type: "string";
                    readonly examples: readonly ["https://tm-prtnr-plan.s3.amazonaws.com/data/internal/partnerplan/marketCharts/marketMoversCharts/chart_1708519518660.png"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Price: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly token_id: {
                    readonly type: "string";
                    readonly default: "3375,3306";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token IDs. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token IDs.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [2];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly TOKEN_ID: {
                                readonly type: "string";
                                readonly examples: readonly ["3306"];
                            };
                            readonly CURRENT_PRICE: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [3334.65];
                            };
                            readonly TOKEN_NAME: {
                                readonly type: "string";
                                readonly examples: readonly ["Ethereum"];
                            };
                            readonly TOKEN_SYMBOL: {
                                readonly type: "string";
                                readonly examples: readonly ["eth"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const PricePrediction: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly token_id: {
                    readonly type: "string";
                    readonly default: "3375,3306";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token IDs. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token IDs.";
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly default: "BTC,ETH";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token Symbols. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token symbols.";
                };
                readonly category: {
                    readonly type: "string";
                    readonly default: "layer-1,nft";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated category name. Click [here](https://api.tokenmetrics.com/api-docs/#/Categories/get_v2_categories) to access the list of categories.";
                };
                readonly exchange: {
                    readonly type: "string";
                    readonly default: "binance,gate";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated exchange name. Click [here](https://api.tokenmetrics.com/api-docs/#/Exchanges/get_v2_exchanges) to access the list of exchanges.";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 1000;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Limit the number of items in response";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Enables pagination and data retrieval control by skipping a specified number of items before fetching data. Page should be a non-negative integer, with 0 indicating the beginning of the dataset.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [2];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly TOKEN_ID: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [14223];
                            };
                            readonly TOKEN_NAME: {
                                readonly type: "string";
                                readonly examples: readonly ["PancakeSwap"];
                            };
                            readonly DATE: {
                                readonly type: "string";
                                readonly examples: readonly ["2024-06-11"];
                            };
                            readonly FORECASTS_FOR_NEXT_7_DAYS: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly "1-day-forecast": {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly forecast: {
                                                readonly type: "number";
                                                readonly default: 0;
                                                readonly examples: readonly [2.955477522468498];
                                            };
                                            readonly forecast_lower: {
                                                readonly type: "number";
                                                readonly default: 0;
                                                readonly examples: readonly [2.15168433897629];
                                            };
                                            readonly forecast_upper: {
                                                readonly type: "number";
                                                readonly default: 0;
                                                readonly examples: readonly [3.752253335204243];
                                            };
                                        };
                                    };
                                    readonly "2-day-forecast": {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly forecast: {
                                                readonly type: "number";
                                                readonly default: 0;
                                                readonly examples: readonly [2.900011453753576];
                                            };
                                            readonly forecast_lower: {
                                                readonly type: "number";
                                                readonly default: 0;
                                                readonly examples: readonly [2.001482408412628];
                                            };
                                            readonly forecast_upper: {
                                                readonly type: "number";
                                                readonly default: 0;
                                                readonly examples: readonly [3.823180064253144];
                                            };
                                        };
                                    };
                                    readonly "3-day-forecast": {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly forecast: {
                                                readonly type: "number";
                                                readonly default: 0;
                                                readonly examples: readonly [2.7352038637972];
                                            };
                                            readonly forecast_lower: {
                                                readonly type: "number";
                                                readonly default: 0;
                                                readonly examples: readonly [1.740803846906033];
                                            };
                                            readonly forecast_upper: {
                                                readonly type: "number";
                                                readonly default: 0;
                                                readonly examples: readonly [3.780126425887028];
                                            };
                                        };
                                    };
                                    readonly "4-day-forecast": {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly forecast: {
                                                readonly type: "number";
                                                readonly default: 0;
                                                readonly examples: readonly [2.710885142018935];
                                            };
                                            readonly forecast_lower: {
                                                readonly type: "number";
                                                readonly default: 0;
                                                readonly examples: readonly [1.567173814446756];
                                            };
                                            readonly forecast_upper: {
                                                readonly type: "number";
                                                readonly default: 0;
                                                readonly examples: readonly [3.87715730323831];
                                            };
                                        };
                                    };
                                    readonly "5-day-forecast": {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly forecast: {
                                                readonly type: "number";
                                                readonly default: 0;
                                                readonly examples: readonly [2.71446914205757];
                                            };
                                            readonly forecast_lower: {
                                                readonly type: "number";
                                                readonly default: 0;
                                                readonly examples: readonly [1.423207528997107];
                                            };
                                            readonly forecast_upper: {
                                                readonly type: "number";
                                                readonly default: 0;
                                                readonly examples: readonly [4.012993083095056];
                                            };
                                        };
                                    };
                                    readonly "6-day-forecast": {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly forecast: {
                                                readonly type: "number";
                                                readonly default: 0;
                                                readonly examples: readonly [2.663624785489615];
                                            };
                                            readonly forecast_lower: {
                                                readonly type: "number";
                                                readonly default: 0;
                                                readonly examples: readonly [1.299384619963853];
                                            };
                                            readonly forecast_upper: {
                                                readonly type: "number";
                                                readonly default: 0;
                                                readonly examples: readonly [4.033013349563843];
                                            };
                                        };
                                    };
                                    readonly "7-day-forecast": {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly forecast: {
                                                readonly type: "number";
                                                readonly default: 0;
                                                readonly examples: readonly [2.653010321629962];
                                            };
                                            readonly forecast_lower: {
                                                readonly type: "number";
                                                readonly default: 0;
                                                readonly examples: readonly [1.189203628379838];
                                            };
                                            readonly forecast_upper: {
                                                readonly type: "number";
                                                readonly default: 0;
                                                readonly examples: readonly [4.147191711323936];
                                            };
                                        };
                                    };
                                };
                            };
                            readonly PREDICTED_RETURNS_7D: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [0.0243];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Quantmetrics: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly token_id: {
                    readonly type: "string";
                    readonly default: "3375,3306";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token IDs. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token IDs.";
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly default: "BTC,ETH";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token Symbols. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token symbols.";
                };
                readonly category: {
                    readonly type: "string";
                    readonly default: "layer-1,nft";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated category name. Click [here](https://api.tokenmetrics.com/api-docs/#/Categories/get_v2_categories) to access the list of categories.";
                };
                readonly exchange: {
                    readonly type: "string";
                    readonly default: "binance,gate";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated exchange name. Click [here](https://api.tokenmetrics.com/api-docs/#/Exchanges/get_v2_exchanges) to access the list of exchanges.";
                };
                readonly marketcap: {
                    readonly type: "string";
                    readonly default: "100000000";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Minimum MarketCap in $";
                };
                readonly volume: {
                    readonly type: "string";
                    readonly default: "100000000";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Minimum 24h trading volume in $";
                };
                readonly fdv: {
                    readonly type: "string";
                    readonly default: "100000000";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Minimum fully diluted valuation in $";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 1000;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Limit the number of items in response";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Enables pagination and data retrieval control by skipping a specified number of items before fetching data. Page should be a non-negative integer, with 0 indicating the beginning of the dataset.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [424];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly TOKEN_ID: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [11867];
                            };
                            readonly TOKEN_NAME: {
                                readonly type: "string";
                                readonly examples: readonly ["Decentr"];
                            };
                            readonly TOKEN_SYMBOL: {
                                readonly type: "string";
                                readonly examples: readonly ["DEC"];
                            };
                            readonly DATE: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-11-07"];
                            };
                            readonly VOLATILITY: {};
                            readonly ALL_TIME_RETURN: {};
                            readonly CAGR: {};
                            readonly SHARPE: {};
                            readonly SORTINO: {};
                            readonly MAX_DRAWDOWN: {};
                            readonly SKEW: {};
                            readonly TAIL_RATIO: {};
                            readonly RISK_REWARD_RATIO: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [0.9886424362];
                            };
                            readonly PROFIT_FACTOR: {};
                            readonly KURTOSIS: {};
                            readonly DAILY_VALUE_AT_RISK: {};
                            readonly DAILY_RETURN_AVG: {};
                            readonly DAILY_RETURN_STD: {};
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ResistanceAndSupportCharts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly token_id: {
                    readonly type: "string";
                    readonly default: "16294";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token IDs. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token IDs.";
                };
                readonly timeFrame: {
                    readonly type: "string";
                    readonly default: "3M";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Time duration for the market charts. Accepted values: 1W, 1M, 3M, Y, MAX";
                };
                readonly chartFilters: {
                    readonly type: "string";
                    readonly default: "linear_scale";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "**Filters:** linear_scale or log_scale";
                };
            };
            readonly required: readonly ["token_id", "timeFrame", "chartFilters"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly chartUrl: {
                    readonly type: "string";
                    readonly examples: readonly ["https://tm-prtnr-plan.s3.amazonaws.com/data/internal/partnerplan/marketCharts/resistanceAndSupport/chart_1725454451659.png"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ResistanceSupport: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly token_id: {
                    readonly type: "string";
                    readonly default: "3375,3306";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token IDs. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token IDs.";
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly default: "BTC,ETH";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token Symbols. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token symbols.";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 1000;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Limit the number of items in response";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Enables pagination and data retrieval control by skipping a specified number of items before fetching data. Page should be a non-negative integer, with 0 indicating the beginning of the dataset.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [4];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly TOKEN_ID: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [26818];
                            };
                            readonly TOKEN_NAME: {
                                readonly type: "string";
                                readonly examples: readonly ["Dynex"];
                            };
                            readonly TOKEN_SYMBOL: {
                                readonly type: "string";
                                readonly examples: readonly ["DNX"];
                            };
                            readonly DATE: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-11-08"];
                            };
                            readonly HISTORICAL_RESISTANCE_SUPPORT_LEVELS: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "number";
                                    readonly default: 0;
                                    readonly examples: readonly [0.025429];
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ScenarioAnalysis: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly token_id: {
                    readonly type: "string";
                    readonly default: "3375,3306";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token IDs. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token IDs.";
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly default: "BTC,ETH";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token Symbols. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token symbols.";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 1000;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Limit the number of items in response";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Enables pagination and data retrieval control by skipping a specified number of items before fetching data. Page should be a non-negative integer, with 0 indicating the beginning of the dataset.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [4];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly TOKEN_ID: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [26818];
                            };
                            readonly TOKEN_NAME: {
                                readonly type: "string";
                                readonly examples: readonly ["Dynex"];
                            };
                            readonly TOKEN_SYMBOL: {
                                readonly type: "string";
                                readonly examples: readonly ["DNX"];
                            };
                            readonly DATE: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-11-08"];
                            };
                            readonly SCENARIO_ANALYSIS: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly crypto_market_cap_trillion: {
                                            readonly type: "number";
                                            readonly default: 0;
                                            readonly examples: readonly [0.5];
                                        };
                                        readonly price_prediction: {
                                            readonly type: "number";
                                            readonly default: 0;
                                            readonly examples: readonly [0.1633083202500198];
                                        };
                                        readonly token_dominance: {
                                            readonly type: "number";
                                            readonly default: 0;
                                            readonly examples: readonly [0.00002475654605782374];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const SectorIndexTransaction: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly indexName: {
                    readonly type: "string";
                    readonly default: "meme";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Index Name for Retrieving the index transaction";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 10;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Limit the number of items in response";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Enables pagination and data retrieval control by skipping a specified number of items before fetching data. Page should be a non-negative integer, with 0 indicating the beginning of the dataset.";
                };
            };
            readonly required: readonly ["indexName"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly DATE: {
                                readonly type: "string";
                                readonly examples: readonly ["2025-03-17T00:00:00.000Z"];
                            };
                            readonly TOKEN_ID: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [41337];
                            };
                            readonly TOKEN_NAME: {
                                readonly type: "string";
                                readonly examples: readonly ["Alchemist AI"];
                            };
                            readonly TOKEN_SYMBOL: {
                                readonly type: "string";
                                readonly examples: readonly ["ALCH"];
                            };
                            readonly ICON: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly large: {
                                        readonly type: "string";
                                        readonly examples: readonly ["https://coin-images.coingecko.com/coins/images/52302/large/small-logo.png?1733053544"];
                                    };
                                    readonly small: {
                                        readonly type: "string";
                                        readonly examples: readonly ["https://coin-images.coingecko.com/coins/images/52302/small/small-logo.png?1733053544"];
                                    };
                                    readonly thumb: {
                                        readonly type: "string";
                                        readonly examples: readonly ["https://coin-images.coingecko.com/coins/images/52302/thumb/small-logo.png?1733053544"];
                                    };
                                };
                            };
                            readonly ACTION: {
                                readonly type: "string";
                                readonly examples: readonly ["Decrease"];
                            };
                            readonly TRANSACTION_SIZE_IN_PCT: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [0.9540914727];
                            };
                            readonly TRANSACTION_SIZE_IN_USD: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [0.02721842297];
                            };
                            readonly TRANSACTION_SIZE_IN_TOKENS: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [0.406123888];
                            };
                            readonly SECTOR: {
                                readonly type: "string";
                                readonly examples: readonly ["Meme"];
                            };
                            readonly TIMESTAMP: {
                                readonly type: "string";
                                readonly examples: readonly ["2025-03-17T00:00:00.000Z"];
                            };
                            readonly TOTAL_COUNT: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [1];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const SectorIndicesHoldings: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly indexName: {
                    readonly type: "string";
                    readonly default: "meme";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Index Name for Retrieving the Tree Map";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 10;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Limit the number of items in response";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Enables pagination and data retrieval control by skipping a specified number of items before fetching data. Page should be a non-negative integer, with 0 indicating the beginning of the dataset.";
                };
            };
            readonly required: readonly ["indexName"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [4];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly NAME: {
                                readonly type: "string";
                                readonly examples: readonly ["NPC"];
                            };
                            readonly ICON: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly large: {
                                        readonly type: "string";
                                        readonly examples: readonly ["https://coin-images.coingecko.com/coins/images/31193/large/NPC_200x200.png?1696530021"];
                                    };
                                    readonly small: {
                                        readonly type: "string";
                                        readonly examples: readonly ["https://coin-images.coingecko.com/coins/images/31193/small/NPC_200x200.png?1696530021"];
                                    };
                                    readonly thumb: {
                                        readonly type: "string";
                                        readonly examples: readonly ["https://coin-images.coingecko.com/coins/images/31193/thumb/NPC_200x200.png?1696530021"];
                                    };
                                };
                            };
                            readonly WEIGHT: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [25];
                            };
                            readonly PCT_CHANGE: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [0.27];
                            };
                            readonly CG_ID: {
                                readonly type: "string";
                                readonly examples: readonly ["non-playable-coin"];
                            };
                            readonly CHAIN_ID: {
                                readonly type: "string";
                                readonly examples: readonly ["1151111081099710"];
                            };
                            readonly TOKEN_ADDRESS: {
                                readonly type: "string";
                                readonly examples: readonly ["BeGY8KqKxboEwRbJd1q9H2K829jS4Rc5dEyNMYXCbV5p"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Sentiments: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 1000;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Limit the number of items in response";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Enables pagination and data retrieval control by skipping a specified number of items before fetching data. Page should be a non-negative integer, with 0 indicating the beginning of the dataset.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly DATETIME: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-11-08 10:00:00.000"];
                            };
                            readonly MARKET_SENTIMENT_GRADE: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [56.17];
                            };
                            readonly MARKET_SENTIMENT_LABEL: {
                                readonly type: "string";
                                readonly examples: readonly ["neutral"];
                            };
                            readonly NEWS_SENTIMENT_GRADE: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [49.04];
                            };
                            readonly NEWS_SENTIMENT_LABEL: {
                                readonly type: "string";
                                readonly examples: readonly ["neutral"];
                            };
                            readonly NEWS_SUMMARY: {
                                readonly type: "string";
                                readonly examples: readonly ["Headlines:\n\n1. Cardano Upgrade Delayed, CEO Blames \"Boring\" Academic Approach \n2. NEAR Backs out of $11 Million Stablecoin Redemption Deal with Wintermute \n3. John Deaton Predicts Potential Approval of Bitcoin ETFs in the US by Late 2023 \n4. ORDI Sees 2,450% Surge in Volume Following Binance Listing News \n5. SpookySwap and Horizen EON Partner to Enhance DeFi Innovation \n\nIn Detail:\n\nCardano's highly anticipated upgrade has been delayed, with the project's CEO attributing the setback to its \"boring\" academic approach. This delay has become a hot topic of discussion in the cryptocurrency markets.\n\nNEAR's decision to back out of an $11 million stablecoin redemption deal with Wintermute has caught attention. The reasons behind this move are yet to be revealed, creating speculation within the industry.\n\nRenowned industry figure John Deaton has predicted that Bitcoin ETFs may potentially receive approval in the United States by late 2023. This development has generated significant interest among investors and enthusiasts.\n\nORDI experienced a remarkable 2,450% surge in volume after the news broke of its listing on Binance. This listing has put the spotlight on ORDI, attracting attention from traders and investors.\n\nSpookySwap and Horizen EON have formed a partnership aimed at enhancing decentralized finance (DeFi) innovation. This collaboration has garnered attention due to the potential impact it could have on the DeFi sector.\n\nIn the larger cryptocurrency landscape, Ripple has emerged as a major player. The ongoing speculation of Ripple going public with an IPO and a report questioning the overpricing of stocks in the Bitcoin mining sector involving Marathon and Riot have captured the industry's attention.\n\nCardano holders have been advised to be prepared for a potential price correction. This cautionary advice highlights the volatility present in the cryptocurrency markets and the need for vigilance among investors.\n\nXRP, the cryptocurrency associated with Ripple, has gained momentum and established itself as a strong contender in the cryptocurrency markets. Its performance has drawn significant attention, indicating the growing influence of Ripple.\n\nFTX has recently transferred $316 million in cryptocurrencies, with a particular focus on Solana leading the outflows. This move by FTX has implications for the Solana ecosystem and has been monitored closely by market participants.\n\nA new Dubai-based exchange has ambitions to become the leading hub for the Solana ecosystem. This development signals the growing interest and potential for the Solana blockchain in the cryptocurrency space.\n\nBitcoin faced rejection at the $36,000 level, causing disappointment among investors. Toncoin, on the other hand, experienced significant daily gains, underscoring the volatility in the cryptocurrency markets.\n\nThe overall crypto market witnessed a decrease in value, with one altcoin plummeting by 18% following Binance's Web3 Wallet announcement. This announcement has triggered discussion about the influence of altcoins and their performance.\n\nIn another noteworthy development, Bitwala, a crypto banking app, has relaunched in partnership with Striga. This relaunch aims to provide enhanced services to crypto users and has attracted attention from those seeking reliable crypto banking options.\n\nThroughout these news pieces, the topic of altcoins and their performance has received significant attention. Altcoins' role in the cryptocurrency market and their potential for growth and volatility continue to be a focal point for investors and enthusiasts."];
                            };
                            readonly REDDIT_SENTIMENT_GRADE: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [62.09];
                            };
                            readonly REDDIT_SENTIMENT_LABEL: {
                                readonly type: "string";
                                readonly examples: readonly ["positive"];
                            };
                            readonly REDDIT_SUMMARY: {
                                readonly type: "string";
                                readonly examples: readonly ["Apologies for the confusion, but based on the provided inputs, there is no clear indication of the most important news in the cryptocurrency markets. The information provided focuses on various topics such as the sale of OnlyFans accounts with loaded balances, a step-by-step guide to starting a successful business, a remote content writing job in the cryptocurrency market, and the revolution of DeFi wallets through account abstraction. Additionally, there are mentions of artificial intelligence, on-chain signals, and the licensing of SEBA Bank in Hong Kong. Without specific posts or clearer indications, it is challenging to determine the most significant news in the cryptocurrency markets."];
                            };
                            readonly TWITTER_SENTIMENT_GRADE: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [68.14];
                            };
                            readonly TWITTER_SENTIMENT_LABEL: {
                                readonly type: "string";
                                readonly examples: readonly ["positive"];
                            };
                            readonly TWITTER_SUMMARY: {
                                readonly type: "string";
                                readonly examples: readonly ["Headline: Cryptocurrency Markets Experience Rapid Growth as AKRO/USDT Achieves 162.5% Profit, Tazz Coin Revamps Cryptocurrency Perception, Ripple's ODL Partner Secures MSO License in Hong Kong, NFTs Gain Momentum\n\nIn the world of cryptocurrency, several major developments have taken place in recent times, showcasing the dynamic nature of the market. One notable news is the remarkable achievement of all take-profit targets for AKRO/USDT on Binance Futures, resulting in an astounding profit of 162.5%. This impressive growth was achieved within a relatively short period of 1 day, 17 hours, and 17 minutes, highlighting the potential for substantial gains in the cryptocurrency market.\n\nAnother significant development in the crypto sphere is the emergence of Tazz Coin, aiming to redefine how cryptocurrencies are perceived and embracing the current trend of meme-inspired digital assets. Riding the meme wave, Tazz Coin embodies a new approach in the cryptocurrency market and presents an intriguing prospect for investors and enthusiasts alike.\n\nIn the realm of digital remittances, Ripple's ODL (On-Demand Liquidity) Partner has successfully secured an MSO (Money Service Operator) license in Hong Kong. This achievement enables the partner to facilitate global remittances and signifies a major step towards establishing efficient and secure cross-border transactions using Ripple's innovative blockchain technology. This noteworthy development is anticipated to contribute significantly to the advancement of digital remittances worldwide.\n\nWhile Bitcoin remains a constant talking point within the cryptocurrency landscape, it is the emergence of Non-Fungible Tokens (NFTs) that has captivated the attention of individuals across the globe. NFTs, which are unique digital assets built on blockchain technology, have gained significant traction due to their potential in decentralizing finances and exploring new horizons in collecting various forms of digital media. The growing interest in NFTs heralds a paradigm shift in how digital assets are perceived and opens up exciting possibilities for creators, collectors, and investors.\n\nAs the cryptocurrency markets continue to evolve, these key developments demonstrate the rapid growth and diversification within the industry. The achievement of take-profit targets for AKRO/USDT, the rise of Tazz Coin, Ripple's ODL Partner securing an MSO license, and the increase in popularity of NFTs all contribute to an exciting and transformative landscape for cryptocurrencies and blockchain technology."];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Tmai: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["RAW_BODY"];
        readonly properties: {
            readonly RAW_BODY: {
                readonly type: "string";
                readonly description: "{     \"messages\":[         {             \"user\": \"What is the next 100x coin ?\"         }     ] }";
                readonly default: "{     \"messages\":[         {             \"user\": \"What is the next 100x coin ?\"         }     ] }";
                readonly format: "json";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["AI Chatbot response successful"];
                };
                readonly answer: {
                    readonly type: "string";
                    readonly examples: readonly ["I have found the answer to your question. According to Token Metrics Analytics, the next potential 100x coin is Augur (REP). Here are some key metrics and information about Augur:\n\n- TM Investor Grade: 71.4%\n- Fundamentals and Technology: Augur has strong fundamentals and technology, as indicated by its high TM Investor Grade.\n- Fully Diluted Valuation: The fully diluted valuation for Augur is 12,060,485. This valuation is relatively low compared to other cryptocurrencies, suggesting that Augur has significant room for growth in the long term.\n\nPlease note that while I can provide you with this data and analysis from Token Metrics, I cannot provide personalized investment advice. It's important to conduct your own research and consider your own investment objectives and risk tolerance before making any investment decisions."];
                };
                readonly thread: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly user: {
                                readonly type: "string";
                                readonly examples: readonly ["What is the next 100x coin ?"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const TokenDetailsPriceCharts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly token_id: {
                    readonly type: "string";
                    readonly default: "3375";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Token ID for retrieving the charts. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token IDs.";
                };
                readonly category: {
                    readonly type: "string";
                    readonly default: "trader";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Type of market perspective, either trader or investor";
                };
                readonly timeFrame: {
                    readonly type: "string";
                    readonly default: "MAX";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Time duration for the market charts. Accepted values: 1W, 1M, 3M, Y, YTD, MAX";
                };
                readonly chartFilters: {
                    readonly type: "string";
                    readonly default: "price,trader_grade,bullish,bearish";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma-separated filters for Investor: price, investor_grade; Trader: price, trader_grade, bullish, bearish";
                };
            };
            readonly required: readonly ["token_id", "category", "timeFrame", "chartFilters"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly chartUrl: {
                    readonly type: "string";
                    readonly examples: readonly ["https://tm-prtnr-plan.s3.amazonaws.com/data/internal/partnerplan/tokenDetailsPriceChart/tokenDetailsPriceCharts/chart_1708516191441.png"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Tokens: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly token_id: {
                    readonly type: "string";
                    readonly default: "3375,3306";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token IDs. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token IDs.";
                };
                readonly token_name: {
                    readonly type: "string";
                    readonly default: "Bitcoin, Ethereum";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Crypto Asset Names (e.g., Bitcoin, Ethereum). Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token names.";
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly default: "BTC,ETH";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token Symbols. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token symbols.";
                };
                readonly category: {
                    readonly type: "string";
                    readonly default: "yield farming,defi";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated category name. Click [here](https://api.tokenmetrics.com/api-docs/#/Categories/get_v2_categories) to access the list of categories.";
                };
                readonly exchange: {
                    readonly type: "string";
                    readonly default: "binance,gate";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated exchange name. Click [here](https://api.tokenmetrics.com/api-docs/#/Exchanges/get_v2_exchanges) to access the list of exchanges.";
                };
                readonly blockchain_address: {
                    readonly type: "string";
                    readonly default: "binance-smart-chain:0x57185189118c7e786cafd5c71f35b16012fa95ad";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Use this parameter to search tokens through specific blockchains and contract addresses. Input the blockchain name followed by a colon and then the contract address. Example: binance-smart-chain:0x57185189118c7e786cafd5c71f35b16012fa95ad. Click [here](https://api.tokenmetrics.com/api-docs/#/Blockchains/get_v2_blockchains) to access the list of blockchains.";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 1000;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Limit the number of items in response";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Enables pagination and data retrieval control by skipping a specified number of items before fetching data. Page should be a non-negative integer, with 0 indicating the beginning of the dataset.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [10];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly TOKEN_ID: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [35809];
                            };
                            readonly TOKEN_NAME: {
                                readonly type: "string";
                                readonly examples: readonly ["Exverse"];
                            };
                            readonly TOKEN_SYMBOL: {
                                readonly type: "string";
                                readonly examples: readonly ["EXVG"];
                            };
                            readonly EXCHANGE_LIST: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly exchange_id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["mxc"];
                                        };
                                        readonly exchange_name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["MEXC"];
                                        };
                                    };
                                };
                            };
                            readonly CATEGORY_LIST: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly category_id: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [102];
                                        };
                                        readonly category_name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["BNB Chain Ecosystem"];
                                        };
                                        readonly category_slug: {
                                            readonly type: "string";
                                            readonly examples: readonly ["binance-smart-chain"];
                                        };
                                    };
                                };
                            };
                            readonly TM_LINK: {
                                readonly type: "string";
                                readonly examples: readonly ["https://app.tokenmetrics.com/exverse"];
                            };
                            readonly CONTRACT_ADDRESS: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly "binance-smart-chain": {
                                        readonly type: "string";
                                        readonly examples: readonly ["0xbb7d61d2511fd2e63f02178ca9b663458af9fc63"];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const TopMarketCapTokens: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly top_k: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 100;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Specifies the number of top cryptocurrencies to retrieve, based on their market capitalization.";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Enables pagination and data retrieval control by skipping a specified number of items before fetching data. Page should be a non-negative integer, with 0 indicating the beginning of the dataset.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [100];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly TOKEN_ID: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [3306];
                            };
                            readonly TOKEN_NAME: {
                                readonly type: "string";
                                readonly examples: readonly ["Ethereum"];
                            };
                            readonly TOKEN_SYMBOL: {
                                readonly type: "string";
                                readonly examples: readonly ["ETH"];
                            };
                            readonly EXCHANGE_LIST: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly exchange_id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["binance"];
                                        };
                                        readonly exchange_name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Binance"];
                                        };
                                    };
                                };
                            };
                            readonly CATEGORY_LIST: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly category_id: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [28];
                                        };
                                        readonly category_name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Smart Contract Platform"];
                                        };
                                        readonly category_slug: {
                                            readonly type: "string";
                                            readonly examples: readonly ["smart-contract-platform"];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const TotalMarketCryptoCapCharts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly timeFrame: {
                    readonly type: "string";
                    readonly default: "MAX";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Time duration for the market charts. Accepted values: 1W, 1M, 3M, Y, MAX";
                };
                readonly chartFilters: {
                    readonly type: "string";
                    readonly default: "total_market_cap,altcoin_market_cap,btc_market_cap";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "**Filters:** total_market_cap,altcoin_market_cap,btc_market_cap";
                };
            };
            readonly required: readonly ["timeFrame", "chartFilters"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly chartUrl: {
                    readonly type: "string";
                    readonly examples: readonly ["https://tm-prtnr-plan.s3.amazonaws.com/data/internal/partnerplan/marketCharts/totalCryptoMarketCapCharts/chart_1708520873340.png"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const TraderGrades: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly token_id: {
                    readonly type: "string";
                    readonly default: "3375,3306";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token IDs. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token IDs.";
                };
                readonly startDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly default: "2023-10-01";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Start Date accepts date as a string - YYYY-MM-DD format";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly default: "2023-10-10";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "End Date accepts date as a string - YYYY-MM-DD format.";
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly default: "BTC,ETH";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token Symbols. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token symbols.";
                };
                readonly category: {
                    readonly type: "string";
                    readonly default: "layer-1,nft";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated category name. Click [here](https://api.tokenmetrics.com/api-docs/#/Categories/get_v2_categories) to access the list of categories.";
                };
                readonly exchange: {
                    readonly type: "string";
                    readonly default: "binance,gate";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated exchange name. Click [here](https://api.tokenmetrics.com/api-docs/#/Exchanges/get_v2_exchanges) to access the list of exchanges.";
                };
                readonly marketcap: {
                    readonly type: "string";
                    readonly default: "100";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Minimum MarketCap in $";
                };
                readonly fdv: {
                    readonly type: "string";
                    readonly default: "100";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Minimum fully diluted valuation in $";
                };
                readonly volume: {
                    readonly type: "string";
                    readonly default: "100";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Minimum 24h trading volume in $";
                };
                readonly traderGrade: {
                    readonly type: "string";
                    readonly default: "17";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Minimum TM Trader Grade";
                };
                readonly traderGradePercentChange: {
                    readonly type: "string";
                    readonly default: "0.14";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Minimum 24h percent change in TM Trader Grade";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 1000;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Limit the number of items in response";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Enables pagination and data retrieval control by skipping a specified number of items before fetching data. Page should be a non-negative integer, with 0 indicating the beginning of the dataset.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1000];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly TOKEN_ID: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [17528];
                            };
                            readonly TOKEN_NAME: {
                                readonly type: "string";
                                readonly examples: readonly ["Gitcoin"];
                            };
                            readonly DATE: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-10-10"];
                            };
                            readonly TA_GRADE: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [14.09];
                            };
                            readonly QUANT_GRADE: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [35.7];
                            };
                            readonly TM_TRADER_GRADE: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [18.41];
                            };
                            readonly TM_TRADER_GRADE_24H_PCT_CHANGE: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [22.41];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const TraderIndices: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly startDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly default: "2023-10-01";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Start Date accepts date as a string - YYYY-MM-DD format";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly default: "2023-10-10";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "End Date accepts date as a string - YYYY-MM-DD format.";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 1000;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Limit the number of items in response";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Enables pagination and data retrieval control by skipping a specified number of items before fetching data. Page should be a non-negative integer, with 0 indicating the beginning of the dataset.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [72];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly PORTFOLIO_DATE: {
                                readonly type: "string";
                                readonly examples: readonly ["2022-07-01"];
                            };
                            readonly TOKEN_ID: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [3960];
                            };
                            readonly TOKEN_NAME: {
                                readonly type: "string";
                                readonly examples: readonly ["Iexec Rlc"];
                            };
                            readonly TOKEN_SYMBOL: {
                                readonly type: "string";
                                readonly examples: readonly ["RLC"];
                            };
                            readonly INDEX_WEIGHT: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [0.007379512118];
                            };
                            readonly INITIAL_PRICE: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [1.32];
                            };
                            readonly AMOUNT_OF_TOKENS: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [55.905394836];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const TradingSignals: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly token_id: {
                    readonly type: "string";
                    readonly default: "3375,3306";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token IDs. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token IDs.";
                };
                readonly startDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly default: "2023-10-01";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Start Date accepts date as a string - YYYY-MM-DD format.";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly default: "2023-10-10";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "End Date accepts date as a string - YYYY-MM-DD format.";
                };
                readonly symbol: {
                    readonly type: "string";
                    readonly default: "BTC,ETH";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated Token Symbols. Click [here](https://api.tokenmetrics.com/api-docs/#/Coins/get_v2_coins) to access the list of token symbols.";
                };
                readonly category: {
                    readonly type: "string";
                    readonly default: "layer-1,nft";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated category name. Click [here](https://api.tokenmetrics.com/api-docs/#/Categories/get_v2_categories) to access the list of categories.";
                };
                readonly exchange: {
                    readonly type: "string";
                    readonly default: "binance,gate";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Comma Separated exchange name. Click [here](https://api.tokenmetrics.com/api-docs/#/Exchanges/get_v2_exchanges) to access the list of exchanges.";
                };
                readonly marketcap: {
                    readonly type: "string";
                    readonly default: "100000000";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Minimum MarketCap in $";
                };
                readonly volume: {
                    readonly type: "string";
                    readonly default: "100000000";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Minimum 24h trading volume in $";
                };
                readonly fdv: {
                    readonly type: "string";
                    readonly default: "100000000";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Minimum fully diluted valuation in $";
                };
                readonly signal: {
                    readonly type: "string";
                    readonly default: "1";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The current signal value of the strategy, between bullish (1), bearish (-1) or no signal (0).";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 1000;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Limit the number of items in response";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Enables pagination and data retrieval control by skipping a specified number of items before fetching data. Page should be a non-negative integer, with 0 indicating the beginning of the dataset.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly api_key: {
                    readonly type: "string";
                    readonly default: "tm-********-****-****-****-************";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["api_key"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Data fetched successfully"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [7];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly TOKEN_ID: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [936];
                            };
                            readonly TOKEN_NAME: {
                                readonly type: "string";
                                readonly examples: readonly ["Decubate"];
                            };
                            readonly TOKEN_SYMBOL: {
                                readonly type: "string";
                                readonly examples: readonly ["DCB"];
                            };
                            readonly DATE: {
                                readonly type: "string";
                                readonly examples: readonly ["2024-04-23"];
                            };
                            readonly TRADING_SIGNAL: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [-1];
                            };
                            readonly TOKEN_TREND: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [-1];
                            };
                            readonly TRADING_SIGNALS_RETURNS: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [87.67];
                            };
                            readonly HOLDING_RETURNS: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [2.9144];
                            };
                            readonly TM_LINK: {
                                readonly type: "string";
                                readonly examples: readonly ["https://app.tokenmetrics.com/decubate"];
                            };
                            readonly TM_TRADER_GRADE: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [26.6];
                            };
                            readonly TM_INVESTOR_GRADE: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [53.39];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Some thing wrong"];
                };
                readonly length: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
export { AiReports, AllTrendIndicators, AnnualizedHistoricalVolatilityCharts, BitcoinVsAltcoinSeasonCharts, Correlation, CryptoInvestors, DailyOhlcv, HourlyOhlcv, IndexHoldings, IndexSpecificPerformance, IndicesIndexAllocationCharts, IndicesPerformance, IndicesRoiCharts, IndicesTransaction, InvestorGrades, InvestorIndices, MarketBullAndBearCharts, MarketMetrics, MarketMoversCharts, MarketPercentOfBullishTmGrades, MarketPercentOfBullishVsBearishCharts, MarketTmGradeSignal, Price, PricePrediction, Quantmetrics, ResistanceAndSupportCharts, ResistanceSupport, ScenarioAnalysis, SectorIndexTransaction, SectorIndicesHoldings, Sentiments, Tmai, TokenDetailsPriceCharts, Tokens, TopMarketCapTokens, TotalMarketCryptoCapCharts, TraderGrades, TraderIndices, TradingSignals };
