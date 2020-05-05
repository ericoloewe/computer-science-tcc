import axios, { AxiosResponse } from "axios";
import { StringUtil } from "../utils/string";

export interface GetRequest {
  url: string;
  headers?: object;
  params?: object;
}

export interface PostRequest {
  url: string;
  headers?: object;
  data?: object;
}

export interface Response<T> {
  headers?: object;
  data: T;
  status: number;
}

type Request = GetRequest | PostRequest;

class RequestService {
  async get<T>(getRequest: string | GetRequest): Promise<Response<T>> {
    let request: GetRequest = this.parseRequest(getRequest);
    const response = await axios(request);

    return this.mapAxiosToResponse(response);
  }

  async post<T>(postRequest: string | PostRequest): Promise<Response<T>> {
    let request: PostRequest = this.parseRequest(postRequest);
    const response = await axios({ ...request, method: "post" });

    return this.mapAxiosToResponse(response);
  }

  protected parseRequest(getRequest: string | Request): Request {
    let request: Request = getRequest as Request;

    if (StringUtil.isString(getRequest)) {
      request = { url: getRequest as string };
    }

    return request;
  }

  private mapAxiosToResponse<T>(response: AxiosResponse): Response<T> {
    const { data, headers, status } = response;

    return {
      data,
      headers,
      status,
    };
  }
}

export class SpotifyRequestService extends RequestService {
  accessToken: string | null;

  constructor(accessToken: string | null) {
    super();
    this.accessToken = accessToken;
  }

  protected parseRequest(getRequest: string | Request): Request {
    const request = super.parseRequest(getRequest);

    if (this.accessToken == null) {
      throw new Error("No access token, you must login!");
    }

    request.headers = {
      Authorization: `Bearer ${this.accessToken}`,
    };

    return request;
  }
}

export const requestService = new RequestService();
