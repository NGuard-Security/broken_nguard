((a) => {
  a.querySelector(".contact").innerHTML = `
        문의 : 
        <a href="javascript:window.ChannelIO('showMessenger');" rel="noopener noreferrer">하단 채널톡</a>, 
        <a href="https://nguard.xyz/invite/nguard" target="_top" rel="noopener noreferrer">디스코드 서포트 서버</a>
    `;
})(document);
