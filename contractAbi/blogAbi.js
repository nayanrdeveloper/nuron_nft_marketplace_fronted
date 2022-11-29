const blogAbi = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "blogId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "title",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "string",
          "name": "category",
          "type": "string"
        }
      ],
      "name": "createdBlog",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "title",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_blogUrl",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "category",
          "type": "string"
        }
      ],
      "name": "createBlog",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllBlogs",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "_blogId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "_title",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_blogUrl",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_category",
              "type": "string"
            }
          ],
          "internalType": "struct Blog.blog[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "blogId_",
          "type": "uint256"
        }
      ],
      "name": "getBlogById",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "_blogId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "_title",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_blogUrl",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_category",
              "type": "string"
            }
          ],
          "internalType": "struct Blog.blog",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]

  export default blogAbi;