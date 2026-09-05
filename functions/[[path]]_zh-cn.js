const UPSTREAM_DNS_PROVIDERS = [
  { url: 'https://cloudflare-dns.com/dns-query', priority: 1, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'www.cloudflare.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://1.1.1.1/dns-query', priority: 2, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'one.one.one.one', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://1.0.0.1/dns-query', priority: 3, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'one.one.one.one', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://mozilla.cloudflare-dns.com/dns-query', priority: 4, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'mozilla.cloudflare-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://security.cloudflare-dns.com/dns-query', priority: 5, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'security.cloudflare-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://family.cloudflare-dns.com/dns-query', priority: 6, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'family.cloudflare-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns64.cloudflare-dns.com/dns-query', priority: 7, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns64.cloudflare-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://brave.cloudflare-dns.com/dns-query', priority: 8, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'brave.cloudflare-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.google/dns-query', priority: 9, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'www.google.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://8888.google/dns-query', priority: 10, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'www.google.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns64.dns.google/dns-query', priority: 11, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns64.dns.google', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.quad9.net/dns-query', priority: 12, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'www.quad9.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns9.quad9.net/dns-query', priority: 13, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns9.quad9.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns10.quad9.net/dns-query', priority: 14, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns10.quad9.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns11.quad9.net/dns-query', priority: 15, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns11.quad9.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns12.quad9.net/dns-query', priority: 16, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns12.quad9.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.nextdns.io/dns-query', priority: 17, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.nextdns.io', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.opendns.com/dns-query', priority: 18, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'www.opendns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.familyshield.opendns.com/dns-query', priority: 19, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.familyshield.opendns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.umbrella.com/dns-query', priority: 20, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.umbrella.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.adguard-dns.com/dns-query', priority: 21, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.adguard-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://unfiltered.adguard-dns.com/dns-query', priority: 22, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'unfiltered.adguard-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://family.adguard-dns.com/dns-query', priority: 23, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'family.adguard-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.mullvad.net/dns-query', priority: 24, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.mullvad.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://adblock.doh.mullvad.net/dns-query', priority: 25, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'adblock.doh.mullvad.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://base.dns.mullvad.net/dns-query', priority: 26, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'base.dns.mullvad.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://extended.dns.mullvad.net/dns-query', priority: 27, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'extended.dns.mullvad.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://all.dns.mullvad.net/dns-query', priority: 28, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'all.dns.mullvad.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://family.dns.mullvad.net/dns-query', priority: 29, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'family.dns.mullvad.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://freedns.controld.com/p0', priority: 30, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'freedns.controld.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://freedns.controld.com/p1', priority: 31, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'freedns.controld.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://freedns.controld.com/p2', priority: 32, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'freedns.controld.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://freedns.controld.com/p3', priority: 33, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'freedns.controld.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://freedns.controld.com/family', priority: 34, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'freedns.controld.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://freedns.controld.com/uncensored', priority: 35, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'freedns.controld.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://sky.rethinkdns.com/dns-query', priority: 36, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'sky.rethinkdns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.cleanbrowsing.org/doh/security-filter/', priority: 37, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.cleanbrowsing.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.cleanbrowsing.org/doh/adult-filter/', priority: 38, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.cleanbrowsing.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.cleanbrowsing.org/doh/family-filter/', priority: 39, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.cleanbrowsing.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://zero.dns0.eu/dns-query', priority: 40, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'zero.dns0.eu', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://kids.dns0.eu/dns-query', priority: 41, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'kids.dns0.eu', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://private.canadianshield.cira.ca/dns-query', priority: 42, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'private.canadianshield.cira.ca', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://protected.canadianshield.cira.ca/dns-query', priority: 43, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'protected.canadianshield.cira.ca', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://family.canadianshield.cira.ca/dns-query', priority: 44, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'family.canadianshield.cira.ca', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://protective.joindns4.eu/dns-query', priority: 45, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'protective.joindns4.eu', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://child.joindns4.eu/dns-query', priority: 46, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'child.joindns4.eu', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://noads.joindns4.eu/dns-query', priority: 47, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'noads.joindns4.eu', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://child-noads.joindns4.eu/dns-query', priority: 48, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'child-noads.joindns4.eu', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://unfiltered.joindns4.eu/dns-query', priority: 49, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'unfiltered.joindns4.eu', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://wikimedia-dns.org/dns-query', priority: 50, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'wikimedia-dns.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.wikimedia.org/dns-query', priority: 51, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.wikimedia.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.switch.ch/dns-query', priority: 52, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.switch.ch', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.digitale-gesellschaft.ch/dns-query', priority: 53, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.digitale-gesellschaft.ch', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.libredns.gr/dns-query', priority: 54, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.libredns.gr', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.libredns.gr/noads', priority: 55, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.libredns.gr', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://odvr.nic.cz/dns-query', priority: 56, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'odvr.nic.cz', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.ffmuc.net/dns-query', priority: 57, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.ffmuc.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.applied-privacy.net/query', priority: 58, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.applied-privacy.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.aa.net.uk/dns-query', priority: 59, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.aa.net.uk', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.alidns.com/dns-query', priority: 60, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.alidns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.twnic.tw/dns-query', priority: 61, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.twnic.tw', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.pub/dns-query', priority: 62, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.pub', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.360.cn/dns-query', priority: 63, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.360.cn', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://public.dns.iij.jp/dns-query', priority: 64, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'public.dns.iij.jp', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.dns.sb/dns-query', priority: 65, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.dns.sb', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.pub/dns-query', priority: 66, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.pub', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://ordns.he.net/dns-query', priority: 67, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ordns.he.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.brahma.world/dns-query', priority: 68, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.brahma.world', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.cfiec.net/dns-query', priority: 69, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.cfiec.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.dnshome.de/dns-query', priority: 70, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.dnshome.de', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dnsforge.de/dns-query', priority: 71, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dnsforge.de', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://clean.dnsforge.de/dns-query', priority: 72, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'clean.dnsforge.de', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://hard.dnsforge.de/dns-query', priority: 73, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'hard.dnsforge.de', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh-fi.blahdns.com/dns-query', priority: 74, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh-fi.blahdns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh-jp.blahdns.com/dns-query', priority: 75, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh-jp.blahdns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh-de.blahdns.com/dns-query', priority: 76, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh-de.blahdns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh-sg.blahdns.com/dns-query', priority: 77, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh-sg.blahdns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.centraleu.pi-dns.com/dns-query', priority: 78, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.centraleu.pi-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.westus.pi-dns.com/dns-query', priority: 79, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.westus.pi-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.eastus.pi-dns.com/dns-query', priority: 80, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.eastus.pi-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.northeu.pi-dns.com/dns-query', priority: 81, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.northeu.pi-dns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.tiar.app/dns-query', priority: 82, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.tiar.app', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.tiarap.org/dns-query', priority: 83, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.tiarap.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://jp.tiar.app/dns-query', priority: 84, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'jp.tiar.app', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://jp.tiarap.org/dns-query', priority: 85, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'jp.tiarap.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.containerpi.com/dns-query', priority: 86, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.containerpi.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.rubyfish.cn/dns-query', priority: 87, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.rubyfish.cn', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.armadillodns.net/dns-query', priority: 88, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.armadillodns.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://commons.host/dns-query', priority: 89, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'commons.host', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.crypto.sx/dns-query', priority: 90, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.crypto.sx', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.dnswarden.com/uncensored', priority: 91, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.dnswarden.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://resolver-eu.lelux.fi/dns-query', priority: 92, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'resolver-eu.lelux.fi', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.bortzmeyer.fr/dns-query', priority: 93, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.bortzmeyer.fr', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.oszx.co/dns-query', priority: 94, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.oszx.co', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://ada.openbld.net/dns-query', priority: 95, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ada.openbld.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://ric.openbld.net/dns-query', priority: 96, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ric.openbld.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://luna.openbld.net/dns-query', priority: 97, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'luna.openbld.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://fra01.dnscry.pt/dns-query', priority: 98, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'fra01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://lon01.dnscry.pt/dns-query', priority: 99, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'lon01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://nyc01.dnscry.pt/dns-query', priority: 100, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'nyc01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://par01.dnscry.pt/dns-query', priority: 101, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'par01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://ams01.dnscry.pt/dns-query', priority: 102, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ams01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://sin01.dnscry.pt/dns-query', priority: 103, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'sin01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://syd01.dnscry.pt/dns-query', priority: 104, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'syd01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'oceania', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://tok01.dnscry.pt/dns-query', priority: 105, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'tok01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://sea01.dnscry.pt/dns-query', priority: 106, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'sea01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://lax01.dnscry.pt/dns-query', priority: 107, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'lax01.dnscry.pt', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://anycast.uncensoreddns.org/dns-query', priority: 108, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'anycast.uncensoreddns.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://unicast.uncensoreddns.org/dns-query', priority: 109, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'unicast.uncensoreddns.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.njal.la/dns-query', priority: 110, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.njal.la', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://freedom.mydns.network/dns-query', priority: 111, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'freedom.mydns.network', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://paranoia.mydns.network/dns-query', priority: 112, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'paranoia.mydns.network', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://adblock.mydns.network/dns-query', priority: 113, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'adblock.mydns.network', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://family.mydns.network/dns-query', priority: 114, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'family.mydns.network', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.comss.one/dns-query', priority: 115, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.comss.one', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://router.comss.one/dns-query', priority: 116, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'router.comss.one', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://ca01.dns4me.net', priority: 117, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ca01.dns4me.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://ca02.dns4me.net', priority: 118, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ca02.dns4me.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://us01.dns4me.net', priority: 119, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'us01.dns4me.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://us02.dns4me.net', priority: 120, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'us02.dns4me.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://uk01.dns4me.net', priority: 121, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'uk01.dns4me.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://au01.dns4me.net', priority: 122, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'au01.dns4me.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'oceania', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://sg01.dns4me.net', priority: 123, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'sg01.dns4me.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://de01.dns4me.net', priority: 124, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'de01.dns4me.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dnspub.restena.lu/dns-query', priority: 125, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dnspub.restena.lu', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://safeservedns.com/dns-query', priority: 126, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'safeservedns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.rabbitdns.org/dns-query', priority: 127, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.rabbitdns.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://security.rabbitdns.org/dns-query', priority: 128, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'security.rabbitdns.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://family.rabbitdns.org/dns-query', priority: 129, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'family.rabbitdns.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://v.recipes/dns-query', priority: 130, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'v.recipes', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://v.recipes/dns-adblock', priority: 131, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'v.recipes', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://v.recipes/dns-ecs', priority: 132, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'v.recipes', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.surfsharkdns.com/dns-query', priority: 133, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.surfsharkdns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.blokada.org/dns-query', priority: 134, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.blokada.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://root.hagezi.org/dns-query', priority: 135, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'root.hagezi.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://wurzn.hagezi.org/dns-query', priority: 136, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'wurzn.hagezi.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://juuri.hagezi.org/dns-query', priority: 137, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'juuri.hagezi.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://eu1.dns.lavate.ch/dns-query', priority: 138, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'eu1.dns.lavate.ch', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.seby.io/dns-query', priority: 139, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.seby.io', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'oceania', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://resolver1.absolight.net/dns-query', priority: 140, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'resolver1.absolight.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://resolver2.absolight.net/dns-query', priority: 141, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'resolver2.absolight.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://per.adfilter.net/dns-query', priority: 142, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'per.adfilter.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'oceania', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://syd.adfilter.net/dns-query', priority: 143, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'syd.adfilter.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'oceania', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://adl.adfilter.net/dns-query', priority: 144, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'adl.adfilter.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'oceania', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://ns0.fdn.fr/dns-query', priority: 145, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ns0.fdn.fr', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://ns1.fdn.fr/dns-query', priority: 146, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ns1.fdn.fr', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.technitium.com/dns-query', priority: 147, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.technitium.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.telekom.de/dns-query', priority: 148, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.telekom.de', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.aquilenet.fr/dns-query', priority: 149, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.aquilenet.fr', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.lacontrevoie.fr/dns-query', priority: 150, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.lacontrevoie.fr', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.belnet.be/dns-query', priority: 151, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.belnet.be', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns1.in-berlin.de/dns-query', priority: 152, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns1.in-berlin.de', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns2.in-berlin.de/dns-query', priority: 153, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns2.in-berlin.de', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://resolver.dnsprivacy.org.uk/dns-query', priority: 154, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'resolver.dnsprivacy.org.uk', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://resolver.sunet.se/dns-query', priority: 155, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'resolver.sunet.se', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://ns1.opennameserver.org/dns-query', priority: 156, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ns1.opennameserver.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.froth.zone/dns-query', priority: 157, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.froth.zone', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.stormycloud.org/dns-query', priority: 158, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.stormycloud.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://adfree.usableprivacy.net/dns-query', priority: 159, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'adfree.usableprivacy.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.dns4all.eu/dns-query', priority: 160, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.dns4all.eu', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.smartguard.io/dns-query', priority: 161, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.smartguard.io', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://privacy.plumedns.com/dns-query', priority: 162, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'privacy.plumedns.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.bitdefender.net/dns-query', priority: 163, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.bitdefender.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.cctld.kg/dns-query', priority: 164, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.cctld.kg', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.lv/dns-query', priority: 165, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.lv', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.nic.lv/dns-query', priority: 166, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.nic.lv', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://japan.dnsovertor.cc/dns-query', priority: 167, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'japan.dnsovertor.cc', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://chuncheon.dnsovertor.cc/dns-query', priority: 168, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'chuncheon.dnsovertor.cc', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://seoul.dnsovertor.cc/dns-query', priority: 169, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'seoul.dnsovertor.cc', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.cert.ee/dns-query', priority: 170, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.cert.ee', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://secure.hafnova.com/dns-query', priority: 171, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'secure.hafnova.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.kescher.at/dns-query', priority: 202, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.kescher.at', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://ibuki.cgnat.net/dns-query', priority: 203, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ibuki.cgnat.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.li/dns-query', priority: 204, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.li', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns4eu.online/dns-query', priority: 205, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns4eu.online', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.elemental.software/dns-query', priority: 206, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.elemental.software', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doth.huque.com/dns-query', priority: 207, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doth.huque.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://zdn.ro/dns-query', priority: 208, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'zdn.ro', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.zknt.org/dns-query', priority: 209, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.zknt.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://ns2.4netguides.org/dns-query', priority: 210, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'ns2.4netguides.org', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dukun.de/dns-query', priority: 211, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dukun.de', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.cynthialabs.net/dns-query', priority: 212, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.cynthialabs.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.la.ahadns.net/dns-query', priority: 213, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.la.ahadns.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.ny.ahadns.net/dns-query', priority: 214, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.ny.ahadns.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'na', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.nl.ahadns.net/dns-query', priority: 215, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.nl.ahadns.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.pl.ahadns.net/dns-query', priority: 216, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.pl.ahadns.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.in.ahadns.net/dns-query', priority: 217, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.in.ahadns.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.sg.ahadns.net/dns-query', priority: 218, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.sg.ahadns.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.au.ahadns.net/dns-query', priority: 219, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.au.ahadns.net', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'oceania', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dnslow.me/dns-query', priority: 220, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dnslow.me', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.dns-over-https.com/dns-query', priority: 221, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.dns-over-https.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.nic.fr/dns-query', priority: 222, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.nic.fr', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.decloudus.com/dns-query', priority: 223, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.decloudus.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.flatuslifir.is/dns-query', priority: 224, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.flatuslifir.is', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://dns.paesa.es/dns-query', priority: 225, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'dns.paesa.es', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'eu', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://jcdns.pikapods.com/dns-query', priority: 226, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'jcdns.pikapods.com', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'global', circuitState: 'closed', lastCircuitOpen: 0 },
  { url: 'https://doh.360.cn/dns-query', priority: 227, healthScore: 100, lastCheck: 0, consecutiveFailures: 0, fronting: 'doh.360.cn', avgResponseTime: 0, successCount: 0, totalRequests: 0, region: 'asia', circuitState: 'closed', lastCircuitOpen: 0 }
];

const DNS_CACHE_TTL_MIN = 60;
const DNS_CACHE_TTL_MAX = 3600;
const DNS_CACHE_TTL_DEFAULT = 300;
const PARALLEL_RACING_COUNT = 10;
const RACE_TIMEOUT = 4000;
const FALLBACK_TIMEOUT = 3000;
const MAX_DNS_RESPONSE_SIZE = 4096;
const MAX_DNS_REQUEST_SIZE = 1024;
const HEALTH_CHECK_INTERVAL = 90000;
const ADAPTIVE_LEARNING_INTERVAL = 180000;
const RATE_LIMIT_REQUESTS = 200;
const RATE_LIMIT_WINDOW = 60000;
const RATE_LIMIT_CLEANUP_INTERVAL = 120000;
const MAX_CONCURRENT_REQUESTS = 150;
const CIRCUIT_BREAKER_THRESHOLD = 5;
const CIRCUIT_BREAKER_TIMEOUT = 60000;
const NEGATIVE_CACHE_TTL = 300;
const DNS_PADDING_ENABLED = true;
const ECS_STRIPPING_ENABLED = true;

const dnsCache = new Map();
const negativeDnsCache = new Map();
const rateLimitMap = new Map();
const pendingRequests = new Map();
let lastCleanupTime = Date.now();
let lastHealthCheck = Date.now();
let lastAdaptiveLearning = Date.now();
let concurrentRequests = 0;
let globalRequestCount = 0;

const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 14.7; rv:133.0) Gecko/20100101 Firefox/133.0',
  'Mozilla/5.0 (X11; Linux x86_64; rv:133.0) Gecko/20100101 Firefox/133.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.2 Safari/605.1.15',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 18_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.2 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (iPad; CPU OS 18_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.2 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 OPR/117.0.0.0'
];

const ACCEPT_HEADERS = [
  'application/dns-message',
  'application/dns-json',
  '*/*',
  'application/dns-message, application/dns-json',
  'application/dns-message;q=0.9, */*;q=0.8'
];

const ADDITIONAL_HEADERS = [
  { 'X-Request-ID': () => crypto.randomUUID() },
  { 'X-Client-Version': () => `DoH/${Math.floor(Math.random() * 10) + 1}.${Math.floor(Math.random() * 10)}` },
  { 'Accept-Language': () => ['en-US,en;q=0.9', 'en-GB,en;q=0.9', 'en;q=0.8'][Math.floor(Math.random() * 3)] },
  { 'Sec-CH-UA': () => `"Chromium";v="${120 + Math.floor(Math.random() * 10)}", "Google Chrome";v="${120 + Math.floor(Math.random() * 10)}"` }
];

function getRandomUserAgent() {
  return USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)];
}

function getRandomAcceptHeader() {
  return ACCEPT_HEADERS[Math.floor(Math.random() * ACCEPT_HEADERS.length)];
}

function getAdaptiveTimeout(provider) {
  const baseTimeout = RACE_TIMEOUT;
  if (provider.avgResponseTime > 0) {
    return Math.min(baseTimeout, Math.max(1000, provider.avgResponseTime * 3));
  }
  return baseTimeout;
}

function checkCircuitBreaker(provider) {
  const now = Date.now();
  if (provider.circuitState === 'open') {
    if (now - provider.lastCircuitOpen > CIRCUIT_BREAKER_TIMEOUT) {
      provider.circuitState = 'half-open';
      return true;
    }
    return false;
  }
  if (provider.consecutiveFailures >= CIRCUIT_BREAKER_THRESHOLD) {
    provider.circuitState = 'open';
    provider.lastCircuitOpen = now;
    return false;
  }
  return true;
}

function getClientRegion(cfData) {
  if (!cfData || !cfData.country) return 'global';
  const country = cfData.country;
  if (['US', 'CA', 'MX'].includes(country)) return 'na';
  if (['CN', 'JP', 'KR', 'SG', 'TW', 'IN'].includes(country)) return 'asia';
  if (['GB', 'DE', 'FR', 'IT', 'ES', 'NL', 'CH', 'SE', 'NO', 'FI', 'PL', 'CZ'].includes(country)) return 'eu';
  if (['AU', 'NZ'].includes(country)) return 'oceania';
  if (['BR', 'AR', 'CL'].includes(country)) return 'sa';
  return 'global';
}

function calculateProviderScore(provider, clientRegion = 'global') {
  const now = Date.now();
  const timeSinceLastCheck = now - provider.lastCheck;
  const healthWeight = 0.35;
  const speedWeight = 0.30;
  const reliabilityWeight = 0.20;
  const regionWeight = 0.15;

  let healthScore = provider.healthScore;
  if (provider.consecutiveFailures > 0) {
    healthScore = Math.max(0, healthScore - (provider.consecutiveFailures * 12));
  }

  let speedScore = 100;
  if (provider.avgResponseTime > 0) {
    speedScore = Math.max(0, 100 - (provider.avgResponseTime / 40));
  }

  let reliabilityScore = 100;
  if (provider.totalRequests > 10) {
    const successRate = (provider.successCount / provider.totalRequests) * 100;
    reliabilityScore = successRate;
  }

  let regionScore = 50;
  if (provider.region === clientRegion) {
    regionScore = 100;
  } else if (provider.region === 'global') {
    regionScore = 75;
  }

  const freshnessPenalty = Math.min(15, timeSinceLastCheck / 12000);

  const totalScore = (healthScore * healthWeight) +
                    (speedScore * speedWeight) +
                    (reliabilityScore * reliabilityWeight) +
                    (regionScore * regionWeight) -
                    freshnessPenalty;

  return Math.max(0, Math.min(100, totalScore));
}

function selectBestProviders(count, clientRegion = 'global') {
  const healthyProviders = UPSTREAM_DNS_PROVIDERS.filter(p =>
    p.healthScore > 25 &&
    p.consecutiveFailures < CIRCUIT_BREAKER_THRESHOLD &&
    checkCircuitBreaker(p)
  );

  if (healthyProviders.length === 0) {
    UPSTREAM_DNS_PROVIDERS.forEach(p => {
      p.healthScore = 100;
      p.consecutiveFailures = 0;
      p.circuitState = 'closed';
    });
    return UPSTREAM_DNS_PROVIDERS.slice(0, count);
  }

  const scoredProviders = healthyProviders.map(provider => ({
    provider,
    score: calculateProviderScore(provider, clientRegion)
  }));

  scoredProviders.sort((a, b) => b.score - a.score);

  const diversityPool = scoredProviders.slice(0, Math.min(25, scoredProviders.length));
  const randomIndex = Math.floor(Math.random() * Math.min(8, diversityPool.length));
  if (randomIndex > 0 && diversityPool[randomIndex]) {
    [diversityPool[0], diversityPool[randomIndex]] = [diversityPool[randomIndex], diversityPool[0]];
  }

  return diversityPool.slice(0, count).map(item => item.provider);
}

function updateProviderMetrics(provider, success, responseTime) {
  provider.totalRequests++;
  provider.lastCheck = Date.now();

  if (success) {
    provider.successCount++;
    provider.consecutiveFailures = 0;
    provider.healthScore = Math.min(100, provider.healthScore + 6);
    if (provider.circuitState === 'half-open') {
      provider.circuitState = 'closed';
    }

    if (provider.avgResponseTime === 0) {
      provider.avgResponseTime = responseTime;
    } else {
      provider.avgResponseTime = (provider.avgResponseTime * 0.65) + (responseTime * 0.35);
    }
  } else {
    provider.consecutiveFailures++;
    provider.healthScore = Math.max(0, provider.healthScore - 12);
  }
}

async function performAdaptiveLearning() {
  const now = Date.now();
  if (now - lastAdaptiveLearning < ADAPTIVE_LEARNING_INTERVAL) {
    return;
  }
  lastAdaptiveLearning = now;

  UPSTREAM_DNS_PROVIDERS.forEach(provider => {
    if (provider.totalRequests > 30) {
      const successRate = (provider.successCount / provider.totalRequests) * 100;

      if (successRate < 40) {
        provider.healthScore = Math.max(15, provider.healthScore - 20);
      } else if (successRate > 97) {
        provider.healthScore = Math.min(100, provider.healthScore + 12);
      }

      if (provider.avgResponseTime > 2500) {
        provider.healthScore = Math.max(25, provider.healthScore - 12);
      } else if (provider.avgResponseTime < 400) {
        provider.healthScore = Math.min(100, provider.healthScore + 8);
      }
    }

    if (now - provider.lastCheck > 900000) {
      provider.healthScore = Math.max(40, provider.healthScore - 15);
    }
  });
}

async function performHealthCheck() {
  const now = Date.now();
  if (now - lastHealthCheck < HEALTH_CHECK_INTERVAL) {
    return;
  }
  lastHealthCheck = now;

  const testQuery = new Uint8Array([
    0x00, 0x00, 0x01, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x07, 0x65, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x03, 0x63, 0x6f, 0x6d,
    0x00, 0x00, 0x01, 0x00, 0x01
  ]);

  const providersToCheck = UPSTREAM_DNS_PROVIDERS
    .filter(p => now - p.lastCheck > HEALTH_CHECK_INTERVAL)
    .slice(0, 12);

  const healthCheckPromises = providersToCheck.map(async (provider) => {
    const startTime = Date.now();
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2500);

      const response = await fetch(provider.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/dns-message',
          'Accept': 'application/dns-message',
          'User-Agent': getRandomUserAgent()
        },
        body: testQuery,
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      const responseTime = Date.now() - startTime;

      if (response.ok) {
        updateProviderMetrics(provider, true, responseTime);
      } else {
        updateProviderMetrics(provider, false, responseTime);
      }
    } catch (error) {
      const responseTime = Date.now() - startTime;
      updateProviderMetrics(provider, false, responseTime);
    }
  });

  await Promise.allSettled(healthCheckPromises);
}

function applyDnsPadding(dnsQuery) {
  if (!DNS_PADDING_ENABLED) return dnsQuery;
  try {
    const view = new Uint8Array(dnsQuery);
    if (view.length < 12) return dnsQuery;

    const arcount = (view[10] << 8) | view[11];
    if (arcount > 0) return dnsQuery;

    const paddingDataSize = Math.floor(Math.random() * 60) + 16;
    const rdlength = 4 + paddingDataSize;
    const optRRSize = 11 + rdlength;
    const optRR = new Uint8Array(optRRSize);

    let i = 0;
    optRR[i++] = 0x00;
    optRR[i++] = 0x00;
    optRR[i++] = 0x29;
    optRR[i++] = 0x10;
    optRR[i++] = 0x00;
    optRR[i++] = 0x00;
    optRR[i++] = 0x00;
    optRR[i++] = 0x00;
    optRR[i++] = 0x00;
    optRR[i++] = (rdlength >> 8) & 0xFF;
    optRR[i++] = rdlength & 0xFF;
    optRR[i++] = 0x00;
    optRR[i++] = 0x0C;
    optRR[i++] = (paddingDataSize >> 8) & 0xFF;
    optRR[i++] = paddingDataSize & 0xFF;

    const result = new Uint8Array(view.length + optRR.length);
    result.set(view);
    result.set(optRR, view.length);
    result[10] = 0x00;
    result[11] = 0x01;

    return result.buffer;
  } catch (e) {
    return dnsQuery;
  }
}

function stripECS(dnsQuery) {
  if (!ECS_STRIPPING_ENABLED) return dnsQuery;
  try {
    const view = new Uint8Array(dnsQuery);
    if (view.length < 12) return dnsQuery;

    const arcount = (view[10] << 8) | view[11];
    if (arcount === 0) return dnsQuery;

    let offset = 12;
    const qdcount = (view[4] << 8) | view[5];

    for (let i = 0; i < qdcount && offset < view.length; i++) {
      while (offset < view.length) {
        const len = view[offset];
        if (len === 0) { offset++; break; }
        if ((len & 0xC0) === 0xC0) { offset += 2; break; }
        offset += len + 1;
      }
      offset += 4;
    }

    const ancount = (view[6] << 8) | view[7];
    const nscount = (view[8] << 8) | view[9];
    const skipSections = ancount + nscount;

    for (let i = 0; i < skipSections && offset < view.length; i++) {
      while (offset < view.length) {
        const len = view[offset];
        if (len === 0) { offset++; break; }
        if ((len & 0xC0) === 0xC0) { offset += 2; break; }
        offset += len + 1;
      }
      if (offset + 10 > view.length) return dnsQuery;
      const rdlength = (view[offset + 8] << 8) | view[offset + 9];
      offset += 10 + rdlength;
    }

    let optStart = -1;
    let optEnd = -1;
    let scanOffset = offset;

    for (let i = 0; i < arcount && scanOffset < view.length; i++) {
      const rrStart = scanOffset;
      while (scanOffset < view.length) {
        const len = view[scanOffset];
        if (len === 0) { scanOffset++; break; }
        if ((len & 0xC0) === 0xC0) { scanOffset += 2; break; }
        scanOffset += len + 1;
      }
      if (scanOffset + 10 > view.length) break;
      const rrType = (view[scanOffset] << 8) | view[scanOffset + 1];
      const rdlength = (view[scanOffset + 8] << 8) | view[scanOffset + 9];
      const rrEnd = scanOffset + 10 + rdlength;
      if (rrType === 41) {
        optStart = rrStart;
        optEnd = rrEnd;
        break;
      }
      scanOffset = rrEnd;
    }

    if (optStart === -1) return dnsQuery;

    const optNameEnd = optStart + 1;
    const optRdataStart = optNameEnd + 9;
    const optRdataEnd = optEnd;

    let hasECS = false;
    let rPos = optRdataStart;
    while (rPos + 4 <= optRdataEnd) {
      const optCode = (view[rPos] << 8) | view[rPos + 1];
      const optLen = (view[rPos + 2] << 8) | view[rPos + 3];
      if (optCode === 8) { hasECS = true; break; }
      rPos += 4 + optLen;
    }

    if (!hasECS) return dnsQuery;

    const newRdataBytes = [];
    rPos = optRdataStart;
    while (rPos + 4 <= optRdataEnd) {
      const optCode = (view[rPos] << 8) | view[rPos + 1];
      const optLen = (view[rPos + 2] << 8) | view[rPos + 3];
      if (optCode !== 8) {
        for (let j = rPos; j < rPos + 4 + optLen && j < view.length; j++) {
          newRdataBytes.push(view[j]);
        }
      }
      rPos += 4 + optLen;
    }

    const newRdlength = newRdataBytes.length;
    const sizeDiff = (optRdataEnd - optRdataStart) - newRdlength;
    const resultSize = view.length - sizeDiff;
    const result = new Uint8Array(resultSize);

    let writePos = 0;
    for (let j = 0; j < optRdataStart; j++) result[writePos++] = view[j];

    result[optRdataStart - 2] = (newRdlength >> 8) & 0xFF;
    result[optRdataStart - 1] = newRdlength & 0xFF;

    for (const b of newRdataBytes) result[writePos++] = b;

    for (let j = optRdataEnd; j < view.length; j++) result[writePos++] = view[j];

    return result.buffer;
  } catch (e) {
    return dnsQuery;
  }
}

function buildEnhancedHeaders(baseHeaders) {
  const headers = { ...baseHeaders };

  if (Math.random() < 0.4) {
    const randomHeader = ADDITIONAL_HEADERS[Math.floor(Math.random() * ADDITIONAL_HEADERS.length)];
    const headerKey = Object.keys(randomHeader)[0];
    const headerValue = randomHeader[headerKey]();
    headers[headerKey] = headerValue;
  }

  if (Math.random() < 0.25) {
    headers['X-Forwarded-For'] = `${Math.floor(Math.random() * 223) + 1}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
  }

  return headers;
}

async function raceMultipleProviders(dnsQuery, headers, clientRegion = 'global') {
  let processedQuery = applyDnsPadding(dnsQuery);
  processedQuery = stripECS(processedQuery);

  const selectedProviders = selectBestProviders(PARALLEL_RACING_COUNT, clientRegion);

  const racePromises = selectedProviders.map(async (provider) => {
    const startTime = Date.now();
    const controller = new AbortController();
    const adaptiveTimeout = getAdaptiveTimeout(provider);
    const timeoutId = setTimeout(() => controller.abort(), adaptiveTimeout);

    try {
      const requestHeaders = buildEnhancedHeaders({
        'Content-Type': 'application/dns-message',
        'Accept': getRandomAcceptHeader(),
        'User-Agent': getRandomUserAgent(),
        'Cache-Control': 'no-cache',
        'DNT': '1'
      });

      const response = await fetch(provider.url, {
        method: 'POST',
        headers: requestHeaders,
        body: processedQuery,
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      const responseTime = Date.now() - startTime;

      if (!response.ok) {
        updateProviderMetrics(provider, false, responseTime);
        throw new Error(`HTTP ${response.status}`);
      }

      const responseData = await response.arrayBuffer();

      if (responseData.byteLength > MAX_DNS_RESPONSE_SIZE) {
        updateProviderMetrics(provider, false, responseTime);
        throw new Error('Response too large');
      }

      updateProviderMetrics(provider, true, responseTime);

      return {
        data: responseData,
        provider: provider.url,
        responseTime: responseTime
      };

    } catch (error) {
      clearTimeout(timeoutId);
      const responseTime = Date.now() - startTime;
      updateProviderMetrics(provider, false, responseTime);
      throw error;
    }
  });

  return Promise.any(racePromises);
}

async function fallbackProviderRequest(dnsQuery, headers, excludeProviders = [], clientRegion = 'global') {
  const availableProviders = UPSTREAM_DNS_PROVIDERS
    .filter(p =>
      !excludeProviders.includes(p.url) &&
      p.healthScore > 15 &&
      checkCircuitBreaker(p)
    )
    .sort((a, b) => calculateProviderScore(b, clientRegion) - calculateProviderScore(a, clientRegion))
    .slice(0, 8);

  for (const provider of availableProviders) {
    const startTime = Date.now();
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FALLBACK_TIMEOUT);

    try {
      const requestHeaders = buildEnhancedHeaders({
        'Content-Type': 'application/dns-message',
        'Accept': 'application/dns-message',
        'User-Agent': getRandomUserAgent()
      });

      const response = await fetch(provider.url, {
        method: 'POST',
        headers: requestHeaders,
        body: dnsQuery,
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      const responseTime = Date.now() - startTime;

      if (response.ok) {
        const responseData = await response.arrayBuffer();
        updateProviderMetrics(provider, true, responseTime);
        return {
          data: responseData,
          provider: provider.url,
          responseTime: responseTime
        };
      }

      updateProviderMetrics(provider, false, responseTime);
    } catch (error) {
      clearTimeout(timeoutId);
      const responseTime = Date.now() - startTime;
      updateProviderMetrics(provider, false, responseTime);
    }
  }

  throw new Error('All fallback providers failed');
}

function getCacheKey(dnsQuery) {
  const view = new Uint8Array(dnsQuery);
  let hash = 2166136261;
  for (let i = 4; i < view.length; i++) {
    hash ^= view[i];
    hash = Math.imul(hash, 16777619) >>> 0;
  }
  return `dns_${hash}`;
}

function getCachedResponse(cacheKey) {
  const cached = dnsCache.get(cacheKey);
  if (!cached) return null;

  if (Date.now() - cached.timestamp > cached.ttl * 1000) {
    dnsCache.delete(cacheKey);
    return null;
  }

  return cached.response;
}

function setCachedResponse(cacheKey, response, ttl = DNS_CACHE_TTL_DEFAULT) {
  const finalTTL = Math.max(DNS_CACHE_TTL_MIN, Math.min(DNS_CACHE_TTL_MAX, ttl));
  dnsCache.set(cacheKey, {
    response: response,
    timestamp: Date.now(),
    ttl: finalTTL
  });

  if (dnsCache.size > 8000) {
    const sortedEntries = Array.from(dnsCache.entries())
      .sort((a, b) => a[1].timestamp - b[1].timestamp);
    const toDelete = sortedEntries.slice(0, 2000);
    toDelete.forEach(([key]) => dnsCache.delete(key));
  }
}

function checkNegativeCache(cacheKey) {
  const cached = negativeDnsCache.get(cacheKey);
  if (!cached) return null;

  if (Date.now() - cached.timestamp > NEGATIVE_CACHE_TTL * 1000) {
    negativeDnsCache.delete(cacheKey);
    return null;
  }

  return cached.response;
}

function setNegativeCache(cacheKey, response) {
  negativeDnsCache.set(cacheKey, {
    response: response,
    timestamp: Date.now()
  });

  if (negativeDnsCache.size > 2000) {
    const oldestKeys = Array.from(negativeDnsCache.keys()).slice(0, 500);
    oldestKeys.forEach(key => negativeDnsCache.delete(key));
  }
}

function isNXDOMAIN(dnsResponse) {
  try {
    const view = new DataView(dnsResponse);
    const flags = view.getUint16(2);
    const rcode = flags & 0x000F;
    return rcode === 3;
  } catch (e) {
    return false;
  }
}

function extractTTL(dnsResponse) {
  try {
    const view = new DataView(dnsResponse);
    let offset = 12;
    const qdcount = view.getUint16(4);

    for (let i = 0; i < qdcount; i++) {
      while (offset < dnsResponse.byteLength && view.getUint8(offset) !== 0) {
        const len = view.getUint8(offset);
        if (len > 63) break;
        offset += len + 1;
      }
      offset += 5;
    }

    if (offset + 10 < dnsResponse.byteLength) {
      offset += 10;
      const ttl = view.getUint32(offset);
      return Math.min(ttl, DNS_CACHE_TTL_MAX);
    }
  } catch (e) {
    return DNS_CACHE_TTL_DEFAULT;
  }
  return DNS_CACHE_TTL_DEFAULT;
}

function isRateLimited(clientIP) {
  const now = Date.now();

  if (now - lastCleanupTime > RATE_LIMIT_CLEANUP_INTERVAL) {
    const cutoff = now - RATE_LIMIT_WINDOW;
    for (const [ip, data] of rateLimitMap.entries()) {
      if (data.windowStart < cutoff) {
        rateLimitMap.delete(ip);
      }
    }
    lastCleanupTime = now;
  }

  let clientData = rateLimitMap.get(clientIP);

  if (!clientData || now - clientData.windowStart > RATE_LIMIT_WINDOW) {
    clientData = {
      count: 0,
      windowStart: now
    };
    rateLimitMap.set(clientIP, clientData);
  }

  clientData.count++;

  return clientData.count > RATE_LIMIT_REQUESTS;
}

function buildCORSHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept, Cache-Control, DNT',
    'Access-Control-Max-Age': '86400'
  };
}

async function handleDNSQuery(request) {
  const url = new URL(request.url);
  const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown';
  const cfData = request.cf || {};
  const clientRegion = getClientRegion(cfData);
  const origin = request.headers.get('Origin');
  const corsHeaders = buildCORSHeaders(origin);
  const acceptHeader = request.headers.get('Accept') || '';
  const wantsJSON = acceptHeader.includes('application/dns-json');

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (isRateLimited(clientIP)) {
    return new Response('Rate limit exceeded', {
      status: 429,
      headers: {
        ...corsHeaders,
        'Retry-After': '60',
        'Content-Type': 'text/plain',
        'X-Rate-Limit': `${RATE_LIMIT_REQUESTS}/${RATE_LIMIT_WINDOW/1000}s`
      }
    });
  }

  let dnsQuery;

  if (request.method === 'POST') {
    dnsQuery = await request.arrayBuffer();
  } else if (request.method === 'GET') {
    const dnsParam = url.searchParams.get('dns');
    if (!dnsParam) {
      if (wantsJSON) {
        const name = url.searchParams.get('name');
        const type = url.searchParams.get('type') || 'A';
        if (name) {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), RACE_TIMEOUT);
          try {
            const cfUrl = `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(name)}&type=${encodeURIComponent(type)}`;
            const resp = await fetch(cfUrl, {
              headers: { 'Accept': 'application/dns-json', 'User-Agent': getRandomUserAgent() },
              signal: controller.signal
            });
            clearTimeout(timeoutId);
            if (resp.ok) {
              const jsonData = await resp.json();
              return new Response(JSON.stringify(jsonData), {
                status: 200,
                headers: { ...corsHeaders, 'Content-Type': 'application/dns-json', 'X-Cache': 'MISS' }
              });
            }
          } catch (e) {
            clearTimeout(timeoutId);
          }
          return new Response(JSON.stringify({ Status: 2 }), {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/dns-json' }
          });
        }
      }
      return new Response('Missing dns parameter', { status: 400, headers: corsHeaders });
    }
    try {
      const paddedDns = dnsParam.replace(/-/g, '+').replace(/_/g, '/');
      const padding = '='.repeat((4 - (paddedDns.length % 4)) % 4);
      dnsQuery = Uint8Array.from(atob(paddedDns + padding), c => c.charCodeAt(0)).buffer;
    } catch (e) {
      return new Response('Invalid dns parameter', { status: 400, headers: corsHeaders });
    }
  } else {
    return new Response('Method not allowed', { status: 405, headers: corsHeaders });
  }

  if (dnsQuery.byteLength > MAX_DNS_REQUEST_SIZE) {
    return new Response('Request too large', { status: 413, headers: corsHeaders });
  }

  if (concurrentRequests >= MAX_CONCURRENT_REQUESTS) {
    return new Response('Server busy', { status: 503, headers: corsHeaders });
  }

  concurrentRequests++;
  globalRequestCount++;

  try {
    performHealthCheck().catch(() => {});
    performAdaptiveLearning().catch(() => {});

    const cacheKey = getCacheKey(dnsQuery);

    const negativeCached = checkNegativeCache(cacheKey);
    if (negativeCached) {
      return new Response(negativeCached, {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/dns-message',
          'Cache-Control': `public, max-age=${NEGATIVE_CACHE_TTL}`,
          'X-Cache': 'NEGATIVE-HIT',
          'X-Provider': 'negative-cache'
        }
      });
    }

    const cachedResponse = getCachedResponse(cacheKey);
    if (cachedResponse) {
      return new Response(cachedResponse, {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/dns-message',
          'Cache-Control': `public, max-age=${DNS_CACHE_TTL_DEFAULT}`,
          'X-Cache': 'HIT',
          'X-Provider': 'cache',
          'X-Client-Region': clientRegion
        }
      });
    }

    if (pendingRequests.has(cacheKey)) {
      try {
        const coalescedResult = await pendingRequests.get(cacheKey);
        return new Response(coalescedResult.data, {
          status: 200,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/dns-message',
            'Cache-Control': `public, max-age=${extractTTL(coalescedResult.data)}`,
            'X-Cache': 'COALESCED',
            'X-Provider': coalescedResult.provider,
            'X-Response-Time': `${coalescedResult.responseTime}ms`,
            'X-Client-Region': clientRegion
          }
        });
      } catch (e) {
      }
    }

    const requestPromise = raceMultipleProviders(dnsQuery, request.headers, clientRegion)
      .catch(() => fallbackProviderRequest(dnsQuery, request.headers, [], clientRegion));

    pendingRequests.set(cacheKey, requestPromise);

    let result;
    try {
      result = await requestPromise;
    } finally {
      pendingRequests.delete(cacheKey);
    }

    if (isNXDOMAIN(result.data)) {
      setNegativeCache(cacheKey, result.data);
    } else {
      const ttl = extractTTL(result.data);
      setCachedResponse(cacheKey, result.data, ttl);
    }

    return new Response(result.data, {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/dns-message',
        'Cache-Control': `public, max-age=${extractTTL(result.data)}`,
        'X-Cache': 'MISS',
        'X-Provider': result.provider,
        'X-Response-Time': `${result.responseTime}ms`,
        'X-Client-Region': clientRegion
      }
    });

  } catch (error) {
    return new Response('DNS query failed', {
      status: 502,
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/plain',
        'X-Error': error.message
      }
    });
  } finally {
    concurrentRequests--;
  }
}

function generateAppleProfile(requestUrl) {
  const baseUrl = new URL(requestUrl);
  const dohUrl = `${baseUrl.protocol}//${baseUrl.hostname}/dns-query`;
  const hostname = baseUrl.hostname;

  const uuid1 = crypto.randomUUID();
  const uuid2 = crypto.randomUUID();
  const uuid3 = crypto.randomUUID();

  const mobileconfig = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>PayloadContent</key>
    <array>
        <dict>
            <key>DNSSettings</key>
            <dict>
                <key>DNSProtocol</key>
                <string>HTTPS</string>
                <key>ServerURL</key>
                <string>${dohUrl}</string>
            </dict>
            <key>PayloadDescription</key>
            <string>配置设备使用 Anonymous DoH Proxy</string>
            <key>PayloadDisplayName</key>
            <string>Anonymous DoH Proxy</string>
            <key>PayloadIdentifier</key>
            <string>com.cloudflare.${uuid2}.dnsSettings.managed</string>
            <key>PayloadType</key>
            <string>com.apple.dnsSettings.managed</string>
            <key>PayloadUUID</key>
            <string>${uuid3}</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
            <key>ProhibitDisablement</key>
            <false/>
        </dict>
    </array>
    <key>PayloadDescription</key>
    <string>此描述文件在 iOS、iPadOS 和 macOS 设备上启用加密 DNS (DNS over HTTPS)，使用您的个人 DoH Proxy。
    
Designed by: Anonymous</string>
    <key>PayloadDisplayName</key>
    <string>Anonymous DoH Proxy - ${hostname}</string>
    <key>PayloadIdentifier</key>
    <string>com.cloudflare.${uuid1}</string>
    <key>PayloadRemovalDisallowed</key>
    <false/>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>${uuid1}</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>`;
  return mobileconfig;
}

function generateStatsPage() {
  const totalProviders = UPSTREAM_DNS_PROVIDERS.length;
  const healthyProviders = UPSTREAM_DNS_PROVIDERS.filter(p => p.healthScore > 50).length;
  const avgHealth = UPSTREAM_DNS_PROVIDERS.reduce((sum, p) => sum + p.healthScore, 0) / totalProviders;

  const topProviders = UPSTREAM_DNS_PROVIDERS
    .filter(p => p.totalRequests > 0)
    .sort((a, b) => calculateProviderScore(b) - calculateProviderScore(a))
    .slice(0, 15);

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DoH Proxy Pro — 实时统计</title>
    <style>
        :root {
            --canvas-default: #0d1117;
            --canvas-subtle: #161b22;
            --canvas-inset: #010409;
            --canvas-overlay: #1c2128;
            --border-default: #30363d;
            --fg-default: #e6edf3;
            --fg-muted: #8b949e;
            --accent-fg: #4493f8;
            --accent-emphasis: #1f6feb;
            --success-fg: #3fb950;
            --success-emphasis: #238636;
            --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", Helvetica, Arial, sans-serif;
            --font-mono: ui-monospace, "SF Mono", "Segoe UI Mono", "Roboto Mono", Menlo, Consolas, monospace;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: var(--font-sans);
            background-color: var(--canvas-default);
            color: var(--fg-default);
            min-height: 100vh;
        }
        .topbar {
            background: rgba(13, 17, 23, 0.85);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--border-default);
            padding: 12px 24px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .topbar a {
            color: var(--fg-default);
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95em;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 32px 24px 40px;
        }
        h1 {
            color: var(--fg-default);
            font-size: 2em;
            margin-bottom: 6px;
            font-weight: 700;
            letter-spacing: -0.02em;
        }
        .subtitle {
            color: var(--fg-muted);
            margin-bottom: 32px;
            font-size: 1em;
        }
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
            gap: 14px;
            margin-bottom: 32px;
        }
        .stat-card {
            background: var(--canvas-subtle);
            border: 1px solid var(--border-default);
            padding: 20px;
            border-radius: 10px;
            transition: border-color 0.15s, transform 0.15s;
        }
        .stat-card:hover {
            border-color: var(--accent-fg);
            transform: translateY(-2px);
        }
        .stat-label {
            font-size: 0.88em;
            color: var(--fg-muted);
            margin-bottom: 8px;
        }
        .stat-value {
            font-size: 2.1em;
            font-weight: 700;
            color: var(--accent-fg);
            font-family: var(--font-mono);
        }
        .table-container {
            background: var(--canvas-subtle);
            border: 1px solid var(--border-default);
            border-radius: 10px;
            overflow: hidden;
        }
        .table-wrapper {
            overflow-x: auto;
            overflow-y: auto;
            max-height: 600px;
        }
        .table-wrapper::-webkit-scrollbar { width: 10px; height: 10px; }
        .table-wrapper::-webkit-scrollbar-track { background: transparent; }
        .table-wrapper::-webkit-scrollbar-thumb {
            background: #30363d;
            border-radius: 6px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            min-width: 760px;
        }
        th, td {
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid var(--border-default);
            font-size: 0.92em;
        }
        td { font-family: var(--font-mono); }
        td:first-child { font-family: var(--font-sans); }
        th {
            background: var(--canvas-inset);
            color: var(--fg-muted);
            font-family: var(--font-sans);
            font-weight: 600;
            font-size: 0.85em;
            position: sticky;
            top: 0;
            z-index: 10;
        }
        tr:hover { background: var(--canvas-overlay); }
        .health-bar {
            height: 6px;
            background: #21262d;
            border-radius: 3px;
            overflow: hidden;
            margin-top: 6px;
            width: 100px;
        }
        .health-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--success-emphasis) 0%, var(--success-fg) 100%);
        }
        .back-button {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            margin-top: 24px;
            padding: 10px 20px;
            background: var(--success-emphasis);
            color: white;
            text-decoration: none;
            border-radius: 6px;
            transition: background 0.15s;
            font-weight: 600;
            font-size: 0.92em;
        }
        .back-button:hover { background: var(--success-fg); }
        :focus-visible { outline: 2px solid var(--accent-fg); outline-offset: 2px; }
        @media (max-width: 768px) {
            .container { padding: 24px 16px 32px; }
            h1 { font-size: 1.5em; }
            .stat-value { font-size: 1.7em; }
            .table-wrapper { max-height: 420px; }
            th, td { padding: 10px; font-size: 0.85em; }
        }
    </style>
</head>
<body>
    <div class="topbar">
        <a href="/">🛡️ DoH Proxy Pro</a>
    </div>
    <div class="container">
        <h1>📊 服务器实时统计</h1>
        <div class="subtitle">Real-time Server Statistics</div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-label">服务器总数</div>
                <div class="stat-value">${totalProviders}</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">健康服务器</div>
                <div class="stat-value">${healthyProviders}</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">平均健康度</div>
                <div class="stat-value">${avgHealth.toFixed(1)}%</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">总请求数</div>
                <div class="stat-value">${globalRequestCount}</div>
            </div>
        </div>

        <div class="table-container">
            <div class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>排名</th>
                            <th>服务器</th>
                            <th>区域</th>
                            <th>成功率</th>
                            <th>响应时间</th>
                            <th>健康度</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${topProviders.map((p, i) => `
                            <tr>
                                <td>${i + 1}</td>
                                <td>${new URL(p.url).hostname}</td>
                                <td>${p.region.toUpperCase()}</td>
                                <td>${p.totalRequests > 0 ? ((p.successCount / p.totalRequests) * 100).toFixed(1) : 0}%</td>
                                <td>${p.avgResponseTime > 0 ? p.avgResponseTime.toFixed(0) : '-'} ms</td>
                                <td>
                                    ${p.healthScore.toFixed(0)}%
                                    <div class="health-bar">
                                        <div class="health-fill" style="width: ${p.healthScore}%"></div>
                                    </div>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>

        <a href="/" class="back-button">← 返回首页</a>
    </div>
</body>
</html>`;
}

async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path === '/dns-query') {
    return handleDNSQuery(request);
  }

  if (path === '/apple') {
    const profile = generateAppleProfile(request.url);
    return new Response(profile, {
      headers: {
        'Content-Type': 'application/x-apple-aspen-config',
        'Content-Disposition': 'attachment; filename="DoH-Profile.mobileconfig"'
      }
    });
  }

  if (path === '/stats') {
    return new Response(generateStatsPage(), {
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  }

  const baseUrl = new URL(request.url);
  const workerUrl = `${baseUrl.protocol}//${baseUrl.hostname}/dns-query`;
  const workerHost = baseUrl.hostname;
  const appleProfileUrl = `${baseUrl.protocol}//${baseUrl.hostname}/apple`;
  const statsUrl = `${baseUrl.protocol}//${baseUrl.hostname}/stats`;

  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DoH Proxy Pro — DNS over HTTPS</title>
    <style>
        :root {
            --canvas-default: #0d1117;
            --canvas-subtle: #161b22;
            --canvas-inset: #010409;
            --canvas-overlay: #1c2128;
            --border-default: #30363d;
            --border-muted: #21262d;
            --fg-default: #e6edf3;
            --fg-muted: #8b949e;
            --fg-subtle: #6e7681;
            --accent-fg: #4493f8;
            --accent-emphasis: #1f6feb;
            --success-fg: #3fb950;
            --success-emphasis: #238636;
            --danger-fg: #f85149;
            --attention-fg: #d29922;
            --done-fg: #a371f7;
            --shadow-card: 0 8px 24px rgba(1, 4, 9, 0.55);
            --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
            --font-mono: ui-monospace, "SF Mono", "Segoe UI Mono", "Roboto Mono", Menlo, Consolas, monospace;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        html { scroll-behavior: smooth; }

        body {
            font-family: var(--font-sans);
            background-color: var(--canvas-default);
            background-image: radial-gradient(ellipse 900px 500px at 50% -10%, rgba(31, 111, 235, 0.16), transparent);
            background-repeat: no-repeat;
            color: var(--fg-default);
            line-height: 1.6;
            min-height: 100vh;
        }

        a { color: var(--accent-fg); }

        :focus-visible {
            outline: 2px solid var(--accent-fg);
            outline-offset: 2px;
            border-radius: 4px;
        }

        .topbar {
            position: sticky;
            top: 0;
            z-index: 50;
            background: rgba(13, 17, 23, 0.85);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--border-default);
        }

        .topbar-inner {
            max-width: 1080px;
            margin: 0 auto;
            padding: 12px 24px;
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .brand {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 600;
            color: var(--fg-default);
            text-decoration: none;
            font-size: 0.95em;
            white-space: nowrap;
        }

        .brand-mark {
            width: 26px;
            height: 26px;
            border-radius: 7px;
            background: linear-gradient(135deg, var(--accent-emphasis), var(--done-fg));
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.85em;
            flex-shrink: 0;
        }

        .topnav {
            display: flex;
            gap: 4px;
            flex-wrap: wrap;
            overflow-x: auto;
            scrollbar-width: none;
        }

        .topnav::-webkit-scrollbar { display: none; }

        .topnav a {
            color: var(--fg-muted);
            text-decoration: none;
            font-size: 0.85em;
            font-weight: 500;
            padding: 6px 10px;
            border-radius: 6px;
            white-space: nowrap;
            transition: background 0.15s, color 0.15s;
        }

        .topnav a:hover {
            color: var(--fg-default);
            background: var(--canvas-overlay);
        }

        .container {
            max-width: 1080px;
            margin: 0 auto;
            padding: 40px 24px 24px;
        }

        .hero {
            padding: 8px 0 28px;
        }

        h1.hero-title {
            font-size: 2.3em;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 14px;
            letter-spacing: -0.02em;
            flex-wrap: wrap;
        }

        .badge-pro {
            background: linear-gradient(135deg, var(--success-emphasis), var(--success-fg));
            color: #ffffff;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.38em;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            vertical-align: middle;
        }

        .hero-subtitle {
            color: var(--fg-muted);
            margin-top: 10px;
            font-size: 1.02em;
            max-width: 640px;
        }

        .shields {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 18px;
        }

        .shield {
            display: inline-flex;
            align-items: center;
            font-size: 0.78em;
            font-weight: 600;
            border-radius: 6px;
            overflow: hidden;
            border: 1px solid var(--border-default);
        }

        .shield span {
            padding: 4px 10px;
        }

        .shield .shield-label {
            background: var(--canvas-overlay);
            color: var(--fg-muted);
        }

        .shield .shield-value {
            color: #ffffff;
        }

        .shield.blue .shield-value { background: var(--accent-emphasis); }
        .shield.green .shield-value { background: var(--success-emphasis); }
        .shield.purple .shield-value { background: var(--done-fg); }
        .shield.orange .shield-value { background: #bd561d; }

        .status-bar {
            background: var(--canvas-subtle);
            border: 1px solid var(--border-default);
            border-radius: 8px;
            padding: 14px 18px;
            margin: 24px 0;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .status-indicator {
            width: 10px;
            height: 10px;
            background: var(--success-fg);
            border-radius: 50%;
            box-shadow: 0 0 8px var(--success-fg);
            flex-shrink: 0;
            animation: pulse 2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
            .status-indicator { animation: none; }
            html { scroll-behavior: auto; }
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.45; }
        }

        .status-text { color: var(--fg-muted); font-size: 0.92em; }
        .status-text strong { color: var(--success-fg); }

        section { scroll-margin-top: 72px; }

        h2.section-title {
            color: var(--fg-default);
            font-size: 1.35em;
            font-weight: 600;
            margin: 44px 0 16px;
            padding-bottom: 10px;
            border-bottom: 1px solid var(--border-default);
            display: flex;
            align-items: center;
            gap: 10px;
        }

        h3.card-title {
            color: var(--fg-default);
            font-size: 1.08em;
            margin-bottom: 12px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .card, .info-box, .usage-card {
            background: var(--canvas-subtle);
            border: 1px solid var(--border-default);
            border-radius: 10px;
            padding: 18px 20px;
            margin: 16px 0;
        }

        .info-box {
            border-inline-start: 3px solid var(--accent-fg);
            border-start-start-radius: 6px;
            border-end-start-radius: 6px;
        }

        .info-box strong { color: var(--fg-default); }

        .url-container {
            background: var(--canvas-inset);
            border: 1px solid var(--border-default);
            border-radius: 8px;
            padding: 14px 16px;
            margin: 12px 0;
        }

        .url-box {
            font-family: var(--font-mono);
            color: #a5d6ff;
            font-size: 0.98em;
            word-break: break-all;
            direction: ltr;
            text-align: left;
            padding: 4px 0 10px;
        }

        .btn {
            border: 1px solid var(--border-default);
            color: var(--fg-default);
            background: var(--canvas-overlay);
            padding: 6px 14px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.85em;
            font-weight: 600;
            transition: background 0.15s, border-color 0.15s;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-family: var(--font-sans);
        }

        .btn:hover { background: #262c36; border-color: #8b949e; }

        .btn-primary {
            background: var(--success-emphasis);
            border-color: var(--success-emphasis);
            color: #ffffff;
        }

        .btn-primary:hover { background: var(--success-fg); border-color: var(--success-fg); }

        .btn-primary.copied { background: var(--success-fg); border-color: var(--success-fg); }

        .btn-accent {
            background: var(--accent-emphasis);
            border-color: var(--accent-emphasis);
            color: #ffffff;
            text-decoration: none;
        }

        .btn-accent:hover { background: var(--accent-fg); border-color: var(--accent-fg); }

        .btn-purple {
            background: var(--done-fg);
            border-color: var(--done-fg);
            color: #ffffff;
            text-decoration: none;
        }

        .btn-purple:hover { filter: brightness(1.12); }

        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
            gap: 12px;
            margin: 16px 0;
        }

        .feature-item {
            background: var(--canvas-subtle);
            border: 1px solid var(--border-default);
            border-radius: 8px;
            padding: 14px 16px;
            display: flex;
            align-items: flex-start;
            gap: 12px;
            transition: border-color 0.15s, transform 0.15s;
        }

        .feature-item:hover {
            border-color: var(--accent-fg);
            transform: translateY(-2px);
        }

        .feature-icon { font-size: 1.2em; flex-shrink: 0; }
        .feature-text { color: var(--fg-default); font-size: 0.92em; }

        .provider-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
            gap: 10px;
            margin: 16px 0;
        }

        .provider-chip {
            background: var(--canvas-inset);
            border: 1px solid var(--border-muted);
            border-radius: 8px;
            padding: 10px 14px;
            font-size: 0.87em;
            color: var(--fg-muted);
        }

        .provider-chip strong { color: var(--fg-default); }

        .warning-box {
            background: rgba(248, 81, 73, 0.08);
            border: 1px solid rgba(248, 81, 73, 0.4);
            border-inline-start: 3px solid var(--danger-fg);
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
        }

        .warning-box strong { color: #ff7b72; }

        .filter-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 12px;
            font-size: 0.9em;
        }

        .filter-table th, .filter-table td {
            padding: 10px 12px;
            border-bottom: 1px solid var(--border-default);
            text-align: right;
            vertical-align: top;
        }

        .filter-table th {
            color: var(--fg-muted);
            font-weight: 600;
            font-size: 0.85em;
        }

        .tag {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 2px 9px;
            border-radius: 12px;
            font-size: 0.82em;
            font-weight: 600;
        }

        .tag-yes { background: rgba(63, 185, 80, 0.15); color: var(--success-fg); }
        .tag-no { background: rgba(248, 81, 73, 0.15); color: var(--danger-fg); }

        .success-highlight { color: var(--success-fg); font-weight: 600; }

        .stats-link { text-decoration: none; }

        /* GitHub-style code viewer */
        .code-viewer {
            background: var(--canvas-inset);
            border: 1px solid var(--border-default);
            border-radius: 8px;
            margin: 14px 0;
            overflow: hidden;
        }

        .code-viewer-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            background: var(--canvas-subtle);
            border-bottom: 1px solid var(--border-default);
            padding: 8px 8px 8px 14px;
        }

        .code-viewer-filename {
            font-family: var(--font-mono);
            font-size: 0.83em;
            color: var(--fg-muted);
            display: flex;
            align-items: center;
            gap: 8px;
            direction: ltr;
        }

        .code-viewer-filename .lang-dot {
            width: 9px;
            height: 9px;
            border-radius: 50%;
            background: var(--attention-fg);
            flex-shrink: 0;
        }

        .code-viewer-body {
            max-height: 340px;
            overflow: auto;
            direction: ltr;
        }

        .code-viewer-body::-webkit-scrollbar { width: 10px; height: 10px; }
        .code-viewer-body::-webkit-scrollbar-track { background: transparent; }
        .code-viewer-body::-webkit-scrollbar-thumb {
            background: #30363d;
            border-radius: 6px;
            border: 2px solid var(--canvas-inset);
        }
        .code-viewer-body::-webkit-scrollbar-thumb:hover { background: #484f58; }

        .code-box {
            font-family: var(--font-mono);
            font-size: 0.82em;
            line-height: 20px;
            white-space: pre;
            color: #a5d6ff;
            padding: 12px 16px;
            display: block;
        }

        .code-line { display: flex; }

        .code-gutter {
            color: var(--fg-subtle);
            text-align: right;
            user-select: none;
            padding-inline-end: 16px;
            min-width: 2.4em;
            flex-shrink: 0;
        }

        .code-content { white-space: pre; }

        .jk { color: #7ee787; }
        .js { color: #a5d6ff; }
        .jn { color: #ffa657; }
        .jb { color: #ff7b72; }
        .jz { color: #ff7b72; }

        .usage-card p { margin: 10px 0; line-height: 1.75; }

        .inline-code {
            background: var(--canvas-inset);
            border: 1px solid var(--border-muted);
            font-family: var(--font-mono);
            font-size: 0.85em;
            padding: 2px 6px;
            border-radius: 4px;
            direction: ltr;
            display: inline-block;
        }

        .block-code {
            background: var(--canvas-inset);
            border: 1px solid var(--border-muted);
            font-family: var(--font-mono);
            font-size: 0.85em;
            padding: 12px 14px;
            border-radius: 6px;
            display: block;
            margin: 10px 0;
            direction: ltr;
            text-align: left;
            color: #a5d6ff;
            overflow-x: auto;
        }

        details.faq-item {
            background: var(--canvas-subtle);
            border: 1px solid var(--border-default);
            border-radius: 8px;
            margin: 10px 0;
            padding: 4px 4px;
        }

        details.faq-item summary {
            cursor: pointer;
            list-style: none;
            padding: 12px 14px;
            font-weight: 600;
            color: var(--fg-default);
            display: flex;
            align-items: center;
            gap: 8px;
        }

        details.faq-item summary::-webkit-details-marker { display: none; }

        details.faq-item summary::before {
            content: "▶";
            font-size: 0.7em;
            color: var(--fg-muted);
            transition: transform 0.15s;
            flex-shrink: 0;
        }

        details.faq-item[open] summary::before { transform: rotate(90deg); }

        details.faq-item .faq-answer {
            padding: 0 14px 16px 38px;
            color: var(--fg-muted);
            line-height: 1.8;
            font-size: 0.94em;
        }

        .footer {
            text-align: center;
            margin-top: 56px;
            padding: 28px 0;
            border-top: 1px solid var(--border-default);
            color: var(--fg-muted);
            font-size: 0.9em;
        }

        .footer a { text-decoration: none; font-weight: 600; }
        .footer a:hover { text-decoration: underline; }
        .footer .footer-sub { margin-top: 8px; font-size: 0.9em; color: var(--fg-subtle); }

        @media (max-width: 720px) {
            .container { padding: 28px 16px 16px; }
            h1.hero-title { font-size: 1.7em; }
            .topbar-inner { padding: 10px 16px; }
        }
    </style>
</head>
<body>
    <div class="topbar">
        <div class="topbar-inner">
            <a href="/" class="brand">
                <span class="brand-mark">🛡️</span>
                <span>DoH Proxy Pro</span>
            </a>
            <nav class="topnav">
                <a href="#overview">简介</a>
                <a href="#features">功能</a>
                <a href="#providers">服务器</a>
                <a href="#setup">配置指南</a>
                <a href="#configs">配置文件</a>
                <a href="#security">安全</a>
                <a href="#faq">常见问题</a>
                <a href="${statsUrl}">实时统计</a>
            </nav>
        </div>
    </div>

    <div class="container">
        <div class="hero" id="overview">
            <h1 class="hero-title">
                🚀 DoH Proxy
                <span class="badge-pro">Pro</span>
            </h1>
            <p class="hero-subtitle">个人 DNS over HTTPS 服务，具备并行路由、Circuit Breaker 与基于地理位置的服务器选择 — 用于绕过 DNS 层过滤。</p>

            <div class="shields">
                <span class="shield blue"><span class="shield-label">runtime</span><span class="shield-value">Cloudflare Workers</span></span>
                <span class="shield green"><span class="shield-label">protocol</span><span class="shield-value">DNS-over-HTTPS</span></span>
                <span class="shield purple"><span class="shield-label">providers</span><span class="shield-value">190+</span></span>
                <span class="shield orange"><span class="shield-label">license</span><span class="shield-value">MIT</span></span>
            </div>
        </div>

        <div class="status-bar">
            <div class="status-indicator"></div>
            <div class="status-text">
                <strong>运行中</strong> — Parallel Racing、Circuit Breaker、Geo-selection 与自适应学习已启用
            </div>
        </div>

        <div class="info-box">
            <strong>这是一款具备反审查能力的高级 DNS over HTTPS (DoH) 服务。</strong><br>
            Pro 版本包含：Parallel DNS Racing、Circuit Breaker Pattern、Geo-based Selection、DNS Padding、ECS Stripping、Negative Caching、Adaptive Timeouts、Enhanced Header Randomization 等功能。
        </div>

        <a href="${statsUrl}" class="btn btn-primary stats-link">📊 查看服务器实时统计</a>

        <h2 class="section-title">📍 您的服务地址</h2>
        <div class="url-container">
            <div class="url-box" id="dohUrl">${workerUrl}</div>
            <button class="btn btn-primary" data-copy-target="dohUrl">📋 复制地址</button>
        </div>

        <section id="features">
            <h2 class="section-title">✨ 高级功能</h2>
            <div class="feature-grid">
                <div class="feature-item">
                    <div class="feature-icon">⚡</div>
                    <div class="feature-text">Parallel DNS Racing — 同时向 10 个最优服务器发起请求，采用首个有效响应</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">🛡️</div>
                    <div class="feature-text">Circuit Breaker Pattern — 自动管理不健康服务器并临时熔断</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">🌍</div>
                    <div class="feature-text">Geo-based Selection — 根据用户地理位置选择最佳服务器</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">🧠</div>
                    <div class="feature-text">自适应学习，随时间智能评分并选择服务器</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">🔄</div>
                    <div class="feature-text">基于响应速度与可靠性的智能负载均衡</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">🔒</div>
                    <div class="feature-text">DNS Padding（符合 RFC 8467）— 防止基于数据包大小的流量分析</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">🚫</div>
                    <div class="feature-text">ECS Stripping — 从 OPT Record 中真正移除 EDNS Client Subnet</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">💾</div>
                    <div class="feature-text">Smart Caching — 自动管理缓存容量与过期</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">⏱️</div>
                    <div class="feature-text">Adaptive Timeouts — 根据各服务器历史记录自动调整超时</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">🔁</div>
                    <div class="feature-text">Negative Caching — 智能缓存 NXDOMAIN 响应</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">⚙️</div>
                    <div class="feature-text">使用 190+ 全球可信 DNS 服务器</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">🎭</div>
                    <div class="feature-text">Enhanced Header Randomization — 对抗 provider 侧指纹识别</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">📊</div>
                    <div class="feature-text">动态评分：健康度 35%、速度 30%、可靠性 20%、区域 15%</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">🔗</div>
                    <div class="feature-text">Request Coalescing — 合并同一查询的并发请求以降低延迟</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">🌏</div>
                    <div class="feature-text">完整支持 CORS，适用于浏览器请求</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">📡</div>
                    <div class="feature-text">支持 application/dns-json 格式的 JSON DoH API</div>
                </div>
            </div>
        </section>

        <section id="providers">
            <h2 class="section-title">🌐 使用的 DNS Providers</h2>
            <div class="provider-grid">
                <div class="provider-chip"><strong>190+</strong> 全球可信 DNS 服务器，支持按区域选择</div>
                <div class="provider-chip">Cloudflare、Google、Quad9、OpenDNS</div>
                <div class="provider-chip">AdGuard、NextDNS、Mullvad</div>
                <div class="provider-chip">AhaDNS — 美国、荷兰、波兰、印度、新加坡、澳大利亚</div>
                <div class="provider-chip">BlahDNS — 芬兰、日本、德国、新加坡</div>
                <div class="provider-chip">Pi-DNS — 欧洲、美国</div>
                <div class="provider-chip">以及更多全球覆盖的服务器...</div>
            </div>
        </section>

        <div class="info-box">
            <strong>✅ 本 DoH Proxy 能做什么</strong><br><br>
            • <span class="success-highlight">通过 HTTPS 完整加密 DNS 请求</span><br>
            • <span class="success-highlight">绕过 DNS 污染</span>并防止 DNS 响应被篡改<br>
            • <span class="success-highlight">在 DNS 层解锁被过滤的网站</span><br>
            • <span class="success-highlight">增强隐私</span> — ISP 无法看到您查询了哪些域名<br>
            • <span class="success-highlight">防止 DNS 层的中间人攻击</span><br>
            • <span class="success-highlight">更高速度</span> — 借助 Racing Mode、Circuit Breaker 与 Smart Caching
        </div>

        <div class="warning-box" id="security">
            <strong>💡 理解过滤类型</strong><br><br>
            网络过滤通常在多个独立层级进行，每一层都有对应解决方案：
            <table class="filter-table">
                <thead>
                    <tr><th>过滤层级</th><th>说明</th><th>本 DoH 是否足够？</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>DNS Filtering</td>
                        <td>在 DNS 响应层面被阻断或伪造</td>
                        <td><span class="tag tag-yes">✓ 是</span></td>
                    </tr>
                    <tr>
                        <td>SNI Filtering</td>
                        <td>根据 TLS ClientHello 中的域名识别并阻断连接</td>
                        <td><span class="tag tag-no">✗ 否 — 需要 ECH 或 Fragment</span></td>
                    </tr>
                    <tr>
                        <td>IP Blocking</td>
                        <td>目标 IP 地址被直接封锁</td>
                        <td><span class="tag tag-no">✗ 否 — 需要 VPN/Proxy</span></td>
                    </tr>
                    <tr>
                        <td>Deep Packet Inspection</td>
                        <td>无论 DNS 或 SNI，直接检查数据包模式</td>
                        <td><span class="tag tag-no">✗ 否 — 需要高级 VPN/Proxy</span></td>
                    </tr>
                </tbody>
            </table>
            <br>
            <strong>结论：</strong>若目标网站仅通过 DNS 被过滤，本 DoH 即足够。对于更高级过滤（SNI/IP/DPI），请将本 DoH 与 Fragment 配置或 VPN 配合使用 — 二者作用于不同网络层级，互补而非替代。
        </div>

        <section id="setup">
            <h2 class="section-title">📱 使用方法</h2>

            <div class="usage-card">
                <h3 class="card-title">🌐 浏览器 (Firefox, Chrome, Edge, Brave)</h3>
                <p>打开浏览器设置 ← Privacy 或 Security ← DNS over HTTPS ← 选择 Custom Provider 并填入上方地址。</p>
                <p><strong>在 Firefox 中启用 ECH：</strong></p>
                <p>1. 在地址栏输入：<span class="inline-code">about:config</span><br>
                2. 搜索：<span class="inline-code">network.dns.echconfig.enabled</span><br>
                3. 将值设为 true</p>
                <p>完成以上设置后，许多仅被 DNS 过滤的网站即可访问。</p>
            </div>

            <div class="usage-card">
                <h3 class="card-title">📱 Intra 应用（Android）</h3>
                <p>1. 从 Google Play 安装 Intra 应用<br>
                2. 打开应用<br>
                3. 点击「Configure custom server URL」<br>
                4. 在 Custom DNS over HTTPS server URL 中填入以下地址：</p>
                <div class="url-container">
                    <div class="url-box">${workerUrl}</div>
                </div>
                <p>5. 打开 ON 开关</p>
                <p>此设置会加密您的 DNS，并解锁仅被 DNS 过滤的网站。</p>
            </div>

            <div class="usage-card">
                <h3 class="card-title">🍎 iOS、iPadOS 与 macOS</h3>
                <p>在 Apple 设备上使用，请下载并安装您的专属配置描述文件：</p>
                <a href="${appleProfileUrl}" class="btn btn-purple">🍎 下载 iOS/macOS 配置文件</a>
                <p style="margin-top: 14px;"><strong>安装方法：</strong></p>
                <p>• <strong>iOS/iPadOS：</strong>用 Safari 下载文件 ← Settings ← General ← VPN, DNS & Device Management ← Downloaded Profile ← Install<br>
                • <strong>macOS：</strong>下载文件 ← System Settings ← Privacy &amp; Security ← Profiles ← 安装配置文件</p>
                <p>安装后，您所有应用的 DNS 请求都会被加密。</p>
            </div>

            <div class="usage-card">
                <h3 class="card-title">💻 Windows 10/11</h3>
                <p>Settings ← Network &amp; Internet ← Properties ← DNS server assignment ← Edit ← Preferred DNS encryption: Encrypted only (DNS over HTTPS)，并填入上方地址。</p>
            </div>

            <div class="usage-card">
                <h3 class="card-title">🐧 Linux (systemd-resolved)</h3>
                <p>1. 编辑配置文件：</p>
                <code class="block-code">sudo nano /etc/systemd/resolved.conf</code>
                <p>2. 添加以下内容：</p>
                <code class="block-code">[Resolve]<br>DNS=${workerUrl}<br>DNSOverTLS=yes</code>
                <p>3. 重启服务：</p>
                <code class="block-code">sudo systemctl restart systemd-resolved</code>
            </div>

            <div class="usage-card">
                <h3 class="card-title">🔧 路由器</h3>
                <p>视路由器型号而定，可能支持 DoH。请查看路由器的 DNS 设置。在路由器上配置 DoH 后，所有连接设备都将使用加密 DNS。</p>
            </div>
        </section>

        <section id="configs">
            <h2 class="section-title">🔧 Xray 配置</h2>

            <div class="usage-card">
                <h3 class="card-title">简易配置（v2rayNG 等）</h3>
                <p>在基于 Xray 的客户端中，可使用以下配置：</p>
                <div class="code-viewer">
                    <div class="code-viewer-header">
                        <span class="code-viewer-filename"><span class="lang-dot"></span>doh-proxy-simple.json</span>
                        <button class="btn" data-copy-target="xrayConfig">📋 复制</button>
                    </div>
                    <div class="code-viewer-body">
                        <div class="code-box" id="xrayConfig" data-lang="json">{
  "remarks": "🛡️ DoH Proxy Pro",
  "dns": {
    "servers": [
      {
        "address": "${workerUrl}",
        "skipFallback": true
      }
    ],
    "queryStrategy": "UseIP"
  },
  "inbounds": [
    {
      "port": 10808,
      "listen": "127.0.0.1",
      "protocol": "socks",
      "settings": {
        "auth": "noauth",
        "udp": true
      },
      "sniffing": {
        "enabled": true,
        "destOverride": ["http", "tls"]
      }
    }
  ],
  "outbounds": [
    {
      "protocol": "freedom",
      "settings": {
        "domainStrategy": "UseIP"
      },
      "tag": "direct"
    }
  ],
  "routing": {
    "domainStrategy": "AsIs",
    "rules": [
      {
        "type": "field",
        "outboundTag": "direct",
        "network": "udp,tcp"
      }
    ]
  }
}</div>
                    </div>
                </div>
                <p><strong>说明：</strong>此配置会保护您的 DNS，并解锁被 DNS 过滤的网站。</p>
            </div>

            <div class="usage-card">
                <h3 class="card-title">带 Fragment 的高级配置（推荐）</h3>
                <p>此配置在 DoH 之外还包含 Fragment 功能，可在 TCP/TLS 层帮助绕过基于 SNI 的过滤：</p>
                <div class="code-viewer">
                    <div class="code-viewer-header">
                        <span class="code-viewer-filename"><span class="lang-dot"></span>doh-proxy-fragment.json</span>
                        <button class="btn" data-copy-target="xrayFragmentConfig">📋 复制</button>
                    </div>
                    <div class="code-viewer-body">
                        <div class="code-box" id="xrayFragmentConfig" data-lang="json">{
  "remarks": "🛡️ DoH Proxy Pro + Fragment",
  "version": {
    "min": "26.7.28"
  },
  "log": {
    "loglevel": "warning",
    "dnsLog": false,
    "access": "none"
  },
  "policy": {
    "levels": {
      "0": {
        "uplinkOnly": 0,
        "downlinkOnly": 0
      },
      "1": {
        "uplinkOnly": 0,
        "downlinkOnly": 0,
        "connIdle": 12
      }
    }
  },
  "dns": {
    "hosts": {
      "cloudflare-dns.com": "challenges.cloudflare.com",
      "${workerHost}": [
        "172.67.73.38",
        "104.19.155.92",
        "104.16.124.175"
      ]
    },
    "servers": [
      {
        "tag": "doh-proxy",
        "address": "${workerUrl}",
        "timeoutMs": 8000
      },
      {
        "address": "fakedns",
        "domains": [
          "domain:ir",
          "geosite:private",
          "geosite:category-ir",
          "geosite:xai",
          "geosite:openai",
          "geosite:google-deepmind",
          "geosite:anthropic",
          "geosite:github",
          "geosite:microsoft",
          "geosite:golang",
          "geosite:python",
          "geosite:rust",
          "full:challenges.cloudflare.com"
        ]
      },
      {
        "tag": "no-filter-dns",
        "address": "https://cloudflare-dns.com/dns-query",
        "timeoutMs": 12000,
        "finalQuery": true
      },
      {
        "address": "localhost",
        "domains": [
          "domain:ir",
          "geosite:private",
          "geosite:category-ir",
          "geosite:xai",
          "geosite:openai",
          "geosite:google-deepmind",
          "geosite:anthropic",
          "geosite:github",
          "geosite:microsoft",
          "geosite:golang",
          "geosite:python",
          "geosite:rust",
          "full:challenges.cloudflare.com"
        ],
        "finalQuery": true
      }
    ],
    "queryStrategy": "UseSystem",
    "useSystemHosts": true,
    "serveStale": true
  },
  "inbounds": [
    {
      "tag": "mixed-in",
      "port": 10808,
      "protocol": "mixed",
      "sniffing": {
        "enabled": true,
        "destOverride": [
          "fakedns",
          "tls",
          "http",
          "quic"
        ],
        "routeOnly": false
      },
      "settings": {
        "udp": true,
        "ip": "127.0.0.1"
      },
      "streamSettings": {
        "sockopt": {
          "tcpKeepAliveInterval": 1,
          "tcpKeepAliveIdle": 11
        }
      }
    }
  ],
  "outbounds": [
    {
      "tag": "block",
      "protocol": "block"
    },
    {
      "tag": "tcp-direct",
      "protocol": "direct",
      "streamSettings": {
        "sockopt": {
          "domainStrategy": "ForceIP",
          "happyEyeballs": {
            "tryDelayMs": 300,
            "prioritizeIPv6": true,
            "interleave": 2,
            "maxConcurrentTry": 20
          }
        }
      }
    },
    {
      "tag": "udp-direct",
      "protocol": "direct",
      "settings": {
        "targetStrategy": "ForceIPv6v4"
      }
    },
    {
      "tag": "dns-out",
      "protocol": "dns",
      "settings": {
        "userLevel": 1
      }
    },
    {
      "tag": "tcp-fragment",
      "protocol": "direct",
      "streamSettings": {
        "finalmask": {
          "tcp": [
            {
              "type": "fragment",
              "settings": {
                "packets": "1-1",
                "lengths": [
                  "1"
                ],
                "delays": [
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "400",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "400",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "400",
                  "1"
                ],
                "maxSplit": "419"
              }
            }
          ]
        },
        "sockopt": {
          "domainStrategy": "ForceIP",
          "happyEyeballs": {
            "tryDelayMs": 300,
            "prioritizeIPv6": true,
            "interleave": 2,
            "maxConcurrentTry": 20
          }
        }
      }
    },
    {
      "tag": "tcp-fragment-tls",
      "protocol": "direct",
      "streamSettings": {
        "finalmask": {
          "tcp": [
            {
              "type": "fragment",
              "settings": {
                "packets": "tlshello",
                "lengths": [
                  "5",
                  "1"
                ],
                "delays": [
                  "0"
                ],
                "maxSplit": "0"
              }
            },
            {
              "type": "fragment",
              "settings": {
                "packets": "1-1",
                "lengths": [
                  "43",
                  "1"
                ],
                "delays": [
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "400",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "400",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "400",
                  "1"
                ],
                "maxSplit": "522"
              }
            }
          ]
        },
        "sockopt": {
          "domainStrategy": "ForceIP",
          "happyEyeballs": {
            "tryDelayMs": 300,
            "prioritizeIPv6": true,
            "interleave": 2,
            "maxConcurrentTry": 20
          }
        }
      }
    },
    {
      "tag": "udp-noises",
      "protocol": "direct",
      "settings": {
        "targetStrategy": "ForceIPv6v4"
      },
      "streamSettings": {
        "finalmask": {
          "udp": [
            {
              "type": "noise",
              "settings": {
                "reset": "28",
                "noise": [
                  {
                    "rand": "1200-1230",
                    "delay": "10"
                  },
                  {
                    "rand": "1200-1230",
                    "delay": "10"
                  },
                  {
                    "rand": "1200-1230",
                    "delay": "10"
                  },
                  {
                    "rand": "1200-1230",
                    "delay": "10"
                  },
                  {
                    "rand": "1200-1230",
                    "delay": "10"
                  },
                  {
                    "rand": "1200-1230",
                    "delay": "10"
                  },
                  {
                    "rand": "1200-1230",
                    "delay": "10"
                  },
                  {
                    "rand": "1200-1230",
                    "delay": "10"
                  },
                  {
                    "rand": "1200-1230",
                    "delay": "10"
                  },
                  {
                    "rand": "1200-1230",
                    "delay": "10"
                  },
                  {
                    "rand": "1200-1230",
                    "delay": "10"
                  },
                  {
                    "rand": "1200-1230",
                    "delay": "10"
                  },
                  {
                    "rand": "1200-1230",
                    "delay": "10"
                  },
                  {
                    "rand": "1200-1230",
                    "delay": "10"
                  },
                  {
                    "rand": "1200-1230",
                    "delay": "10"
                  },
                  {
                    "rand": "1200-1230",
                    "delay": "10"
                  },
                  {
                    "rand": "1200-1230",
                    "delay": "10"
                  },
                  {
                    "rand": "1200-1230",
                    "delay": "10"
                  },
                  {
                    "rand": "1200-1230",
                    "delay": "10"
                  },
                  {
                    "rand": "1200-1230",
                    "delay": "10"
                  },
                  {
                    "rand": "1200-1230",
                    "delay": "10"
                  },
                  {
                    "rand": "1200-1230",
                    "delay": "10"
                  },
                  {
                    "rand": "1200-1230",
                    "delay": "10"
                  },
                  {
                    "rand": "1200-1230",
                    "delay": "10"
                  },
                  {
                    "rand": "1200-1230",
                    "delay": "10"
                  }
                ]
              }
            }
          ]
        }
      }
    }
  ],
  "routing": {
    "domainStrategy": "IPOnDemand",
    "rules": [
      {
        "outboundTag": "tcp-fragment-tls",
        "inboundTag": [
          "no-filter-dns"
        ]
      },
      {
        "outboundTag": "dns-out",
        "port": 53
      },
      {
        "outboundTag": "tcp-direct",
        "network": "tcp",
        "domain": [
          "domain:ir",
          "geosite:private",
          "geosite:category-ir",
          "geosite:xai",
          "geosite:openai",
          "geosite:google-deepmind",
          "geosite:anthropic",
          "geosite:github",
          "geosite:microsoft",
          "geosite:golang",
          "geosite:python",
          "geosite:rust"
        ]
      },
      {
        "outboundTag": "udp-direct",
        "network": "udp",
        "domain": [
          "domain:ir",
          "geosite:private",
          "geosite:category-ir",
          "geosite:xai",
          "geosite:openai",
          "geosite:google-deepmind",
          "geosite:anthropic",
          "geosite:github",
          "geosite:microsoft",
          "geosite:golang",
          "geosite:python",
          "geosite:rust"
        ]
      },
      {
        "outboundTag": "block",
        "ip": [
          "10.10.34.0/24",
          "2001:4188:2:600::/64"
        ]
      },
      {
        "outboundTag": "tcp-direct",
        "network": "tcp",
        "ip": [
          "geoip:private",
          "geoip:ir"
        ]
      },
      {
        "outboundTag": "udp-direct",
        "network": "udp",
        "ip": [
          "geoip:private",
          "geoip:ir"
        ]
      },
      {
        "outboundTag": "block",
        "network": "udp",
        "protocol": [
          "quic"
        ],
        "ip": [
          "0.0.0.0/0",
          "::/0"
        ]
      },
      {
        "outboundTag": "block",
        "network": "udp",
        "port": "443",
        "ip": [
          "0.0.0.0/0",
          "::/0"
        ]
      },
      {
        "outboundTag": "udp-noises",
        "network": "udp",
        "ip": [
          "0.0.0.0/0",
          "::/0"
        ]
      },
      {
        "outboundTag": "tcp-fragment-tls",
        "network": "tcp",
        "protocol": [
          "tls"
        ],
        "ip": [
          "0.0.0.0/0",
          "::/0"
        ]
      },
      {
        "outboundTag": "tcp-fragment-tls",
        "network": "tcp",
        "port": "443",
        "ip": [
          "0.0.0.0/0",
          "::/0"
        ]
      },
      {
        "outboundTag": "tcp-fragment",
        "network": "tcp",
        "ip": [
          "0.0.0.0/0",
          "::/0"
        ]
      },
      {
        "outboundTag": "block",
        "port": "0-65535"
      }
    ]
  }
}</div>
                    </div>
                </div>
                <p><strong>Fragment 配置的优势：</strong></p>
                <p>• 分片 TLS ClientHello 数据包以绕过 DPI<br>
                • 与 DoH 互补，作用于不同网络层级<br>
                • 增强对更高级过滤的绕过能力</p>
            </div>
        </section>

        <h2 class="section-title">🛡️ 安全建议</h2>
        <div class="info-box">
            <strong>为获得最大安全性与可访问性：</strong><br><br>
            <strong>场景 1 — 仅 DNS 过滤：</strong><br>
            ✓ 使用本 DoH Proxy<br>
            ✓ 许多网站即可访问<br><br>

            <strong>场景 2 — 更高级过滤：</strong><br>
            ✓ 使用本 DoH Proxy<br>
            ✓ 在浏览器中启用 ECH<br>
            ✓ 在 Xray 中使用 Fragment 配置<br>
            ✓ 其他层级配合 VPN<br><br>

            <strong>通用建议：</strong><br>
            • 使用最新版浏览器<br>
            • 始终启用 HTTPS<br>
            • 使用可靠的安全软件<br>
            • 使用强密码
        </div>

        <section id="faq">
            <h2 class="section-title">❓ 常见问题</h2>

            <details class="faq-item">
                <summary>使用本 DoH 能否访问被过滤的网站？</summary>
                <div class="faq-answer">可以，如果网站仅被 DNS 过滤。若使用其他方式（IP blocking、DPI、SNI）过滤，则还需 Fragment 或 VPN。</div>
            </details>

            <details class="faq-item">
                <summary>什么是 Fragment？有何作用？</summary>
                <div class="faq-answer">Fragment 是一种反过滤技术，在 TCP 层将 TLS ClientHello 数据包分片，使 DPI 无法在单个完整包中看到域名（SNI）。该技术作用于到目标的连接本身，而非 DNS，因此与 DoH 互补而非替代。</div>
            </details>

            <details class="faq-item">
                <summary>什么是 ECH？如何帮助？</summary>
                <div class="faq-answer">Encrypted Client Hello 在 TLS 握手过程中加密域名（SNI），从而防止基于 SNI 的过滤。使用时需浏览器/客户端与目标服务器均支持。</div>
            </details>

            <details class="faq-item">
                <summary>本 DoH 与 1.1.1.1 有何不同？</summary>
                <div class="faq-answer">这是您的个人 DoH Proxy，运行在 Cloudflare Worker 上。它不依赖单一 provider，而是同时向 10 个最优 DNS 服务器发请求（Parallel Racing），用 Circuit Breaker 隔离不健康服务器，按地理位置选择最佳服务器，并智能缓存结果。最终仍使用这些可信 provider，但多了一层可靠性与速度保障。</div>
            </details>

            <details class="faq-item">
                <summary>本服务是否免费？</summary>
                <div class="faq-answer">是的，在 Cloudflare Workers 免费额度内（每天 100,000 次请求）完全免费。</div>
            </details>

            <details class="faq-item">
                <summary>使用本 DoH 会降低速度吗？</summary>
                <div class="faq-answer">不会；借助智能 Cache 与 Racing Mode，通常能获得尽可能快的响应。</div>
            </details>

            <details class="faq-item">
                <summary>简易配置与 Fragment 配置有何区别？</summary>
                <div class="faq-answer">简易配置仅启用 DoH，足以绕过 DNS 层过滤。Fragment 配置在 DoH 之外还会分片 TLS ClientHello 数据包，有助于绕过更高级过滤（SNI/DPI）。为获得最大可访问性，推荐使用 Fragment 配置。</div>
            </details>

            <details class="faq-item">
                <summary>有人能看到我在使用本服务吗？</summary>
                <div class="faq-answer">您的 DNS 请求是加密的，ISP 无法看到内容；只能看到您连接到某个 Cloudflare 服务器。</div>
            </details>

            <details class="faq-item">
                <summary>Parallel Racing 如何工作？</summary>
                <div class="faq-answer">该系统同时向 10 个最优 DNS 服务器（按区域、速度、健康度与可靠性评分）发请求，并采用首个有效响应。这可降低延迟并提高可靠性。</div>
            </details>

            <details class="faq-item">
                <summary>什么是 Request Coalescing？</summary>
                <div class="faq-answer">当多个用户或程序同时查询同一域名时，Worker 不会向上游 provider 发送多个独立请求，而是只发一次请求并将响应共享给所有请求方。这可降低服务器负载与延迟。</div>
            </details>
        </section>

        <div class="footer">
            <p>Engineered by: <a href="https://t.me/An0nymou3Bot" target="_blank" rel="noopener noreferrer">Anonymous</a></p>
            <p class="footer-sub">增强反审查版本 · 并行竞速技术</p>
        </div>
    </div>

    <script>
        function fallbackCopy(text) {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
            } catch (err) {}
            document.body.removeChild(textArea);
        }

        function copyToClipboard(elementId, btn) {
            const element = document.getElementById(elementId);
            const text = element.getAttribute('data-raw') || element.textContent;
            const originalHTML = btn.innerHTML;

            const onDone = () => {
                btn.classList.add('copied');
                btn.innerHTML = '✓ 已复制!';
                setTimeout(() => {
                    btn.classList.remove('copied');
                    btn.innerHTML = originalHTML;
                }, 2000);
            };

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(onDone).catch(() => {
                    fallbackCopy(text);
                    onDone();
                });
            } else {
                fallbackCopy(text);
                onDone();
            }
        }

        document.addEventListener('click', function (event) {
            const btn = event.target.closest('[data-copy-target]');
            if (!btn) return;
            copyToClipboard(btn.getAttribute('data-copy-target'), btn);
        });

        function highlightJSONLine(line) {
            const escaped = line
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
            return escaped.replace(
                /("[^"]*"(\\s*:)?|\\btrue\\b|\\bfalse\\b|\\bnull\\b|-?\\d+(?:\\.\\d+)?)/g,
                function (match) {
                    let cls = 'jn';
                    if (/^"/.test(match)) {
                        cls = /:$/.test(match) ? 'jk' : 'js';
                    } else if (/^(true|false)$/.test(match)) {
                        cls = 'jb';
                    } else if (/^null$/.test(match)) {
                        cls = 'jz';
                    }
                    return '<span class="' + cls + '">' + match + '</span>';
                }
            );
        }

        function enhanceCodeBlocks() {
            document.querySelectorAll('.code-box[data-lang="json"]').forEach(function (box) {
                const raw = box.textContent.replace(/\\n$/, '');
                const lines = raw.split('\\n');
                const rows = lines.map(function (line, i) {
                    return '<div class="code-line"><span class="code-gutter">' + (i + 1) +
                        '</span><span class="code-content">' + (highlightJSONLine(line) || ' ') + '</span></div>';
                });
                box.setAttribute('data-raw', raw);
                box.innerHTML = rows.join('');
            });
        }

        const WORKER_URL = "${workerUrl}";
        const WORKER_HOST = "${workerHost}";
        const FRAGMENT_CONFIG_SOURCE = 'https://raw.githubusercontent.com/4n0nymou3/cloudflare-doh-proxy/main/configs/doh-proxy-fragment.template.json';

        async function loadDynamicFragmentConfig() {
            const box = document.getElementById('xrayFragmentConfig');
            if (!box) return;
            try {
                const response = await fetch(FRAGMENT_CONFIG_SOURCE, { cache: 'no-store' });
                if (!response.ok) return;
                let text = await response.text();
                text = text.split('\${workerUrl}').join(WORKER_URL);
                text = text.split('\${workerHost}').join(WORKER_HOST);
                JSON.parse(text);
                const raw = text.trim();
                const lines = raw.split(String.fromCharCode(10));
                const rows = lines.map(function (line, i) {
                    return '<div class="code-line"><span class="code-gutter">' + (i + 1) +
                        '</span><span class="code-content">' + (highlightJSONLine(line) || ' ') + '</span></div>';
                });
                box.setAttribute('data-raw', raw);
                box.innerHTML = rows.join('');
            } catch (err) {
                console.warn('Fragment config auto-update skipped; using bundled default.', err);
            }
        }

        document.addEventListener('DOMContentLoaded', function () {
            enhanceCodeBlocks();
            loadDynamicFragmentConfig();
        });
    </script>
</body>
</html>`;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  });
}

export async function onRequest(context) {
  return handleRequest(context.request);
}