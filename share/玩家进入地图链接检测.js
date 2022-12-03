world.onPlayerJoin(({ entity }) => {
    const url={
        isCodemaoCn(url) { return new URL(url).hostname.includes('box3.codemao.cn') },
        isBox3Fun(url) { return (new URL(url).hostname.includes('box3.fun') && !new URL(url).hostname.includes('engine')) },
        isEngine(url) { return (new URL(url).hostname.includes('engine') && new URL(url).hostname.includes('box3.fun')) },
        isPreprod(url) { return (new URL(url).hostname.includes('box3.codemao.cn') && new URL(url).hostname.includes('preprod')) },
        isStaging(url) { return (new URL(url).hostname.includes('box3.fun') && new URL(url).hostname.includes('staging')) },
    };
    const playerUrl = entity.player.url.href;
    if (url.isCodemaoCn(playerUrl)) {/*是box3.codemao.cn主机名*/};
    if (url.isBox3Fun(playerUrl)) {/*是box3.fun主机名*/};
    if (url.isEngine(playerUrl)) {/*是engine前缀*/};
    if (url.isPreprod(playerUrl)) {/*是preprod前缀（1年前的服务器）*/};
    if (url.isStaging(playerUrl)) {/*是staging前缀*/};
})
