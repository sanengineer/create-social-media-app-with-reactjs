import React from "react";

export const InfoWeb = ({ linksInfoWeb }) => {
  if (linksInfoWeb.length === 0) return null;

  console.log("suggested_account_numbers:", linksInfoWeb.length);

  const listInfoWeb = (linkInfoWeb) => {
    return (
      <li class="list-link">
        <a
          class={"list-link-" + linkInfoWeb}
          href={"/" + linkInfoWeb}
          target="_blank"
        >
          {linkInfoWeb}
        </a>
      </li>
    );
  };

  const listsInfoWeb = linksInfoWeb.map((linkInfoWeb) =>
    listInfoWeb(linkInfoWeb)
  );

  return (
    <div class="info-web">
      <div class="about">
        <nav class="nav-about">
          <ul class="underlist-link">{listsInfoWeb}</ul>
        </nav>
        <span class="copyright">© 2019 SOSMET FROM FSWWAVETWO</span>
      </div>
    </div>
  );
};
