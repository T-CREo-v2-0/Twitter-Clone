import axios, { AxiosInstance } from "axios";

export default class TwitterDB {
  client: AxiosInstance;

  constructor(baseUrl = "http://localhost:3005") {
    this.client = axios.create({
      baseURL: baseUrl,
    });
  }

  async getTweets(limit: number) {
    const response = await this.client.get("/tweet", {
      data: {
        limit: limit,
      },
    });
    return response.data;
  }

  async getTweetsUser(id: string, limit: number) {
    const response = await this.client.get(`/tweet/${id}`, {
      data: {
        limit: limit,
      },
    });
    return response.data;
  }
}
