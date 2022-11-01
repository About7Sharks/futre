export interface PostData {
    content: string;
    data:{
        title: string;
        author: string;
        date: string;
        location: string;
        image: string;
        summary: string;
        tags: Array<string>;
    }
}

export interface PostParams {
    params: {
      post: string;
    };
  }