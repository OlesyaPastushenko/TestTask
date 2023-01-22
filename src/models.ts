interface ICard {
        id: number
        featured: boolean
        title: string
        url: string
        imageUrl: string
        newsSite: string
        summary: string
        publishedAt: string
        launches: [
          {
            id: string
            provider: string
          }
        ],
        events: [
          {
            id: string
            provider: string
          }
        ]
}

interface IArticle {
    id: number
    featured: false
    title: string
    url: string
    imageUrl: string
    newsSite: string
    summary: string
    publishedAt: string
    launches: [
      {
        id: string
        provider: string
      }
    ],
    events: [
      {
        id: string
        provider: string
      }
    ]
}
 export type { IArticle, ICard }
