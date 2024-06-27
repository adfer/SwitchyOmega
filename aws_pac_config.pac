function FindProxyForURL(url, host) {
    if (shExpMatch(url, "*ec2*.*compute*.amazonaws.com*")) return 'SOCKS5 localhost:9090';
    if (shExpMatch(url, "*ec2*.compute*")) return 'SOCKS5 localhost:9090';
    if (shExpMatch(url, "http://10.*")) return 'SOCKS5 localhost:9090';
    if (shExpMatch(url, "*10*.compute*")) return 'SOCKS5 localhost:9090';
    if (shExpMatch(url, "*10*.amazonaws.com*")) return 'SOCKS5 localhost:9090';
    if (shExpMatch(url, "*.compute.internal*")) return 'SOCKS5 localhost:9090';
    if (shExpMatch(url, "*ec2.internal*")) return 'SOCKS5 localhost:9090';
    if (shExpMatch(url, "*es.amazonaws.com*")) return 'SOCKS5 localhost:9090';
    return 'DIRECT';
}
