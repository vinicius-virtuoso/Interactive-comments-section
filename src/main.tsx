import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CommentsProvider } from "./Provider/CommentsProvider";
import { CurrentUserProvider } from "./Provider/CurrentUserProvider";
import { ModalProvider } from "./Provider/ModalProvider";
import GlobalStyle from "./styles/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CurrentUserProvider>
      <CommentsProvider>
        <ModalProvider>
          <App />
          <GlobalStyle />
        </ModalProvider>
      </CommentsProvider>
    </CurrentUserProvider>
  </React.StrictMode>
);
