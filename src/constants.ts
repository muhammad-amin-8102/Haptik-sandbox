export const CONSTANT = {
  devToken: "0437de0b7cc4534e7fe3037769b9a779c6756d324fa80a936405809833b465fb",
  host: "https://api.producthunt.com/v1/",
  posts: "posts",
  per_page: 5,
  getCommentsUrl(id: number, page: number, perPage: number) {
    return (
      this.host +
      this.posts +
      "/" +
      id +
      "/comments?page=" +
      page +
      "&per_page=" +
      perPage
    );
  },
  getHeaders() {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      Host: "api.producthunt.com",
      Authorization: "Bearer " + this.devToken
    };
  },
  getVoteUrl(id: number) {
    return this.host + this.posts + "/" + id + "/vote";
  },
  getGetObj() {
    return {
      method: "GET",
      headers: this.getHeaders()
    };
  },
  getPostObj() {
    return {
      method: "POST",
      headers: this.getHeaders()
    };
  },
  getDeleteObj() {
    return {
      method: "DELETE",
      headers: this.getHeaders()
    };
  },
  getPutObj() {
    return {
      method: "PUT",
      headers: this.getHeaders()
    };
  },
  getPatchObj() {
    return {
      method: "PATCH",
      headers: this.getHeaders()
    };
  }
};
