# 🚀 DoH Proxy Pro - Cloudflare

一款强大的 DoH (DNS over HTTPS) Proxy，具备 Parallel Racing、Circuit Breaker、Geo-selection 与自适应学习技术 — 完全免费！

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-orange.svg)](https://workers.cloudflare.com/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-green.svg)](https://pages.cloudflare.com/)

## 📖 关于项目

DoH Proxy Pro 是一款高级 DNS over HTTPS 服务，基于 Cloudflare Workers 与 Pages 构建，以最高级别的安全性与速度为您的 DNS 查询提供完整加密。

### ✨ 高级功能

#### 🎯 Parallel DNS Racing
- 同时向 **10 个最优 DNS 服务器** 发起请求
- 采用首个快速有效响应
- 显著降低 Latency
- 提升可靠性

#### 🔌 Circuit Breaker Pattern
- 自动识别不健康服务器
- 连续失败超过 5 次时临时熔断
- 60 秒后自动恢复
- 三种状态：Closed、Open、Half-Open

#### 🌍 Geo-based Provider Selection
- 自动识别用户地理位置
- 优先选择邻近服务器（降低 Latency）
- 支持 6 个区域：NA、EU、Asia、Oceania、SA、Global
- 在最终评分中占 15% 权重

#### 🧠 AI Adaptive Learning
- 根据服务器表现进行自适应学习
- 基于历史记录智能选择
- 随时间自动优化
- 动态评分：**健康度 35% + 速度 30% + 可靠性 20% + 地理区域 15%**

#### 🌐 支持 220+ 可信 DNS 服务器
- Cloudflare、Google、Quad9、OpenDNS
- AdGuard、NextDNS、Mullvad
- AhaDNS（美国、荷兰、波兰、印度、新加坡、澳大利亚）
- BlahDNS（芬兰、日本、德国、新加坡）
- Pi-DNS（欧洲、美国）
- DNScrypt Servers（法国、荷兰、美国、新加坡、澳大利亚、日本）
- 以及更多全球覆盖的服务器...

#### 🔒 高级隐私与安全
- **DNS Padding (RFC 8467)**：标准且完整的 OPT Record 实现，防止 Traffic Analysis
- **QNAME Minimization**：最小化 Query 中的信息暴露
- **高级 ECS Stripping**：真实解析并从 OPT Record 中移除 EDNS Client Subnet，防止 IP 泄露
- **Enhanced Header Randomization**：高级 Headers 随机化（X-Request-ID、X-Client-Version、Accept-Language、Sec-CH-UA）
- **Random Header Ordering**：Headers 顺序随机化，对抗 Fingerprinting

#### 🛡️ 反审查与错误管理
- 每 90 秒自动 **Health Check**
- **Circuit Breaker** 管理故障
- Racing 失败时的 **Intelligent Fallback**
- **Domain Fronting** 模拟
- **Random Delay**（5–100ms）对抗 DPI
- **Enhanced Decoy Requests**：25% 概率、20 个多样化域名，迷惑监控系统
- **Request Coalescing**：智能合并并发重复请求，降低负载与 latency

#### ⚡ 高性能
- **Smart LRU Cache**：自动 TTL 与智能管理（8000 entries）
- **Negative Caching**：NXDOMAIN 响应缓存（300s TTL，2000 entries）
- **Adaptive Timeouts**：根据各服务器平均响应时间动态调整
- **Load Balancing**：带区域权重的动态负载均衡
- **Concurrent Request Management**：限制 150 个并发请求
- **Advanced Rate Limiting**（每 IP 每分钟 200 次请求）
- **FNV-1a Cache Key**：更强的 hash 算法生成 Cache Key，忽略 Transaction ID
- 依托 Cloudflare 全球 CDN 网络

#### 🌐 高级兼容性
- **CORS Support**：完整支持 Cross-Origin 请求，可直接在浏览器中使用
- **JSON DoH API**：支持 `application/dns-json` 格式及 `?name=domain&type=A` 参数，兼容更广泛的客户端

#### 📊 监控与统计
- **Real-time Stats Page**
- 展示 Top 15 活跃服务器
- 实时统计：服务器数量、健康服务器、平均健康度、总请求数
- 显示各服务器的成功率、响应时间与健康度
- 移动端 Responsive Design
- 可滚动表格 + Sticky Header

## 🎭 两种部署方式

### 1️⃣ Cloudflare Workers

**适合：** 快速独立部署

**优点：**
- 部署更快
- 管理更简单
- 无需 GitHub

**所需文件：** [`worker.js`](https://github.com/4n0nymou3/cloudflare-doh-proxy/blob/main/manual-worker/worker.js)

### 2️⃣ Cloudflare Pages

**适合：** 连接 GitHub 并自动更新

**优点：**
- 直接连接 GitHub
- 每次 Push 自动更新
- 支持 CI/CD

**所需文件：** 放在 `functions/` 目录下的 [`[[path]].js`](https://github.com/4n0nymou3/cloudflare-doh-proxy/blob/main/functions/%5B%5Bpath%5D%5D.js)

## 🚀 安装指南

### 方法 1：Cloudflare [Workers](https://github.com/4n0nymou3/cloudflare-doh-proxy/blob/main/manual-worker/worker.js)（推荐新手）

#### 步骤 1：创建 Worker

1. 打开 [dash.cloudflare.com](https://dash.cloudflare.com) 并登录
2. 左侧菜单选择 **Workers & Pages**
3. 点击 **Create Application**
4. 选择 **Create Worker**
5. 为 Worker 起名（例如 `my-doh-proxy`）
6. 点击 **Deploy**

#### 步骤 2：粘贴代码

1. 点击 **Edit Code**
2. 删除全部默认代码
3. 复制 [`worker.js`](https://github.com/4n0nymou3/YOUR-REPO-NAME/blob/main/manual-worker/worker.js) 的内容并粘贴
4. 点击 **Save and Deploy**

#### 步骤 3：获取 URL

Deploy 完成后，您的服务 URL：

```
https://your-worker-name.your-subdomain.workers.dev/dns-query
```

### 方法 2：Cloudflare [Pages](https://github.com/4n0nymou3/cloudflare-doh-proxy/blob/main/functions/%5B%5Bpath%5D%5D.js)（推荐开发者）

#### 步骤 1：准备 Repository

1. Fork 本仓库或新建一个仓库
2. 目录结构：
```
your-repository/
├── functions/
│   └── [[path]].js
└── README.md
```
3. 将 [`[[path]].js`](https://github.com/4n0nymou3/cloudflare-doh-proxy/blob/main/functions/%5B%5Bpath%5D%5D.js) 放入 `functions/` 目录

#### 步骤 2：连接 Cloudflare Pages

1. 打开 [dash.cloudflare.com](https://dash.cloudflare.com) 并登录
2. 左侧菜单选择 **Workers & Pages**
3. 点击 **Create Application**
4. 选择 **Pages**
5. 点击 **Connect to Git**
6. 选择您的仓库
7. Build settings：
   - Framework preset: **None**
   - Build command: 留空
   - Build output directory: 留空
8. 点击 **Save and Deploy**

#### 步骤 3：获取 URL

Deploy 完成后，您的服务 URL：

```
https://your-page-name.pages.dev/dns-query
```

## 📱 使用指南

### 🌐 浏览器

#### Firefox

```
Settings → Privacy & Security → DNS over HTTPS
→ Choose provider: Custom
→ 填入 URL
```

**启用 ECH 以增强安全：**
1. 地址栏输入：`about:config`
2. 搜索：`network.dns.echconfig.enabled`
3. 将值设为 `true`

#### Chrome / Edge / Brave

```
Settings → Privacy and security → Security
→ Use secure DNS → Custom
→ 填入 URL
```

### 📱 移动端

#### Android（Intra 应用）

1. 从 Google Play 安装 [Intra](https://play.google.com/store/apps/details?id=app.intra)
2. 打开应用
3. 点击 **Configure custom server URL**
4. 填入您的 URL：`https://your-domain/dns-query`
5. 打开 **ON** 开关

#### iOS、iPadOS 与 macOS

**自动下载配置描述文件：**

1. 访问您的服务主页（不要带 `/dns-query`）
2. 点击 **🍎 下载 iOS/macOS 配置文件** 按钮
3. 下载 `.mobileconfig` 文件

**在 iOS/iPadOS 上安装：**
```
Safari → 下载文件
Settings → General → VPN, DNS & Device Management
→ Downloaded Profile → Install
```

**在 macOS 上安装：**
```
下载文件
System Settings → Privacy & Security → Profiles
→ 安装配置文件
```

### 🔧 Xray 客户端

#### 简易配置（仅 DoH）

在 v2rayNG 等客户端中使用 DoH：

1. 打开服务主页（不要带 `/dns-query`）
2. 复制简易配置
3. 在客户端中 Import

**功能：** DNS 加密

#### Fragment 配置（推荐）

用于绕过更高级过滤：

1. 打开服务主页
2. 复制 Fragment 配置
3. 在客户端中 Import

**功能：**
- DNS 加密
- Fragment 绕过 DPI
- 分片 TLS Hello
- SOCKS 端口（10808）与 HTTP 端口（10809）

### 💻 桌面端

#### Windows 10/11

```
Settings → Network & Internet → Properties
→ DNS server assignment → Edit
→ Preferred DNS encryption: Encrypted only (DNS over HTTPS)
→ 填入 URL
```

#### Linux（systemd-resolved）

1. 编辑配置文件：
```bash
sudo nano /etc/systemd/resolved.conf
```

2. 添加以下内容：
```ini
[Resolve]
DNS=https://your-domain/dns-query
DNSOverTLS=yes
```

3. 重启服务：
```bash
sudo systemctl restart systemd-resolved
```

#### macOS

使用与 iOS 相同的方法（下载配置描述文件）

### 🔧 路由器

若路由器支持 DoH：

```
DNS 设置 → DoH/DNS over HTTPS
→ 填入您的服务 URL
```

**优点：** 所有连接到该网络的设备都将使用加密 DNS

## 📊 查看实时统计

查看服务器实时统计：

```
https://your-domain/stats
```

**可查看信息：**
- 服务器总数（220+）
- 健康服务器数量
- 系统平均健康度
- 总请求数
- Top 15 服务器表格，包含：
  - 排名与服务器名称
  - 地理区域
  - 成功率
  - 平均响应时间
  - 健康度（带图形进度条）

## 🧪 测试服务

### 方法 1：浏览器

访问服务主页（不要带 `/dns-query`）：

```
https://your-domain
```

若页面显示绿色 "Pro" badge 且状态为「运行中」，则服务正常工作。

### 方法 2：统计页面

```
https://your-domain/stats
```

显示服务器状态、Cache 与请求数量等信息。

### 方法 3：cURL

```bash
curl -H 'accept: application/dns-json' \
  'https://your-domain/dns-query?name=google.com&type=A'
```

## ⚙️ 高级设置

### 修改并行 Racing 服务器数量

```javascript
const PARALLEL_RACING_COUNT = 10;
```

### 修改 Timeout

```javascript
const RACE_TIMEOUT = 4000;
const FALLBACK_TIMEOUT = 3000;
```

### 修改 Circuit Breaker

```javascript
const CIRCUIT_BREAKER_THRESHOLD = 5;
const CIRCUIT_BREAKER_TIMEOUT = 60000;
```

### 修改 Rate Limit

```javascript
const RATE_LIMIT_REQUESTS = 200;
const RATE_LIMIT_WINDOW = 60000;
```

### 修改 Cache TTL

```javascript
const DNS_CACHE_TTL_MIN = 60;
const DNS_CACHE_TTL_MAX = 3600;
const DNS_CACHE_TTL_DEFAULT = 300;
```

### 修改 Negative Cache TTL

```javascript
const NEGATIVE_CACHE_TTL = 300;
```

### 修改 Decoy Requests 概率

```javascript
const DECOY_REQUEST_PROBABILITY = 0.25;
```

### 修改 Random Delay 范围

```javascript
const RANDOM_DELAY_MIN = 5;
const RANDOM_DELAY_MAX = 100;
```

### 启用/禁用隐私功能

```javascript
const QNAME_MINIMIZATION_ENABLED = true;
const DNS_PADDING_ENABLED = true;
const ECS_STRIPPING_ENABLED = true;
```

### 修改 Cache 大小

```javascript
// Main cache size
if (dnsCache.size > 8000) {
    // Evict 2000 oldest entries
}

// Negative cache size
if (negativeDnsCache.size > 2000) {
    // Evict 500 oldest entries
}
```

## 📊 限制说明

### Cloudflare Workers 免费计划：

- ✅ 每天 **100,000** 次请求
- ✅ 每次请求 **10ms** CPU 时间
- ✅ 无 Bandwidth 限制

### Cloudflare Pages 免费计划：

- ✅ **无限** 请求
- ✅ 每月 **500** 次 build
- ✅ 无 Bandwidth 限制

**以上额度对个人使用甚至小型组织完全足够！**

## 💡 理解过滤类型

### 1. DNS Filtering ✅
- 网站在 DNS 层面被阻断
- **本 DoH Proxy 可绕过此类过滤**

### 2. SNI Filtering ⚠️
- 网站根据 Server Name Indication 被阻断
- 需要 ECH 或额外工具

### 3. IP Blocking ❌
- 服务器 IP 地址被直接封锁
- 需要 VPN

### 4. Deep Packet Inspection (DPI) ⚠️
- 深度检查数据包内容
- Fragment 配置可提供帮助
- 完整绕过通常需要 VPN

## ❓ 常见问题

### 这是 VPN 服务吗？
不是。本服务仅加密 DNS 查询，不能替代 VPN。

### 哪些网站可以访问？
仅被 DNS 过滤的网站。其他情况仍需 VPN。

### Parallel Racing 如何工作？
系统同时向 10 个最优 DNS 服务器（按地理区域、速度、健康度与可靠性评分）发起请求，并采用首个快速有效响应。这可降低 latency 并提高可靠性。

### 什么是 Circuit Breaker？
自动识别不健康服务器的机制。若某服务器连续失败 5 次，会在 60 秒内被移出轮询，之后再重新测试。

### Geo-based Selection 如何工作？
系统根据用户国家（通过 Cloudflare）在评分中给邻近服务器更高权重（15%），从而降低 latency。

### 自适应学习如何工作？
系统记录并分析各服务器表现（速度、成功率、可靠性），据此优先选择更优服务器。评分：健康度 35% + 速度 30% + 可靠性 20% + 地理区域 15%。

### 什么是 DNS Padding？
符合 RFC 8467 的技术，向 Query 添加带 Padding Option（code 12）的标准 OPT Record，防止 Traffic Analysis 与使用模式识别。完整、真实的实现确保所有上游服务器均可接受。

### 什么是 QNAME Minimization？
通过最小化 Query 中发送的信息来增强隐私的技术。

### 什么是 ECS Stripping？
真实解析并从 OPT Record 中移除 EDNS Client Subnet，防止向 DNS 服务器泄露您的 IP 信息。该实现会解析 DNS 消息的二进制结构，精确识别并删除 option code 8。

### 什么是 Negative Caching？
将 NXDOMAIN（域名不存在）响应缓存 300 秒，避免对无效域名的重复查询。

### 什么是 Adaptive Timeout？
系统根据各服务器平均响应时间动态调整 Timeout：`min(baseTimeout, max(1000ms, avgResponseTime * 3))`

### 什么是 Fragment？
将 TLS Hello 数据包分片的技术，防止被 DPI 识别。

### 网速会变慢吗？
不会，反而可能更快。借助 Racing Mode、Adaptive Timeout、Smart Caching 与 Geo-selection，速度通常会提升。

### 什么是 Request Coalescing？
当多个用户或程序同时查询同一域名时，系统不会向上游发送多个独立请求，而是只发一次请求并将响应共享给所有请求方。这可降低服务器负载与 latency。

### 什么是 Enhanced Header Randomization？
对 HTTP Headers（User-Agent、Accept、X-Request-ID、X-Client-Version、Accept-Language、Sec-CH-UA）进行高级随机化，防止 Fingerprinting 与识别。

### CORS Support 是什么？有何帮助？
完整的 Cross-Origin Resource Sharing 支持，使浏览器与 Web 应用可直接与本 DoH Proxy 通信，不受 Same-Origin 限制。这提升了与更多客户端和工具的兼容性。

### 什么是 JSON DoH API？
支持 `application/dns-json` 格式，可通过 `?name=domain&type=A` 发起查询。对无法构建二进制 DNS 消息的客户端非常有用，进一步扩大服务兼容性。

### 本服务免费吗？
是的，完全免费，且无流量限制。

### 如何查看服务器统计？
访问 `/stats` 地址。将显示带有完整服务器信息的实时页面。

## 🛡️ 安全建议

### 场景 1：仅 DNS 过滤
✅ 使用本 DoH Proxy 即可

### 场景 2：更高级过滤
✅ 使用本 DoH Proxy  
✅ 在浏览器中启用 ECH  
✅ 使用 Fragment 配置  
✅ 其他层级配合 VPN

### 通用建议
- 使用最新版浏览器
- 始终启用 HTTPS
- 使用可靠的安全软件
- 使用强密码

## 🔬 技术架构

### 服务器评分算法

```
Score = (Health × 0.35) + (Speed × 0.30) + (Reliability × 0.20) + (Region × 0.15) - Freshness_Penalty

Health Score: 0-100（每次连续失败扣 12 分）
Speed Score: 100 - (avgResponseTime / 40)
Reliability Score: (successCount / totalRequests) × 100
Region Score: 100（同区域）| 75（Global）| 50（其他区域）
Freshness Penalty: max(15, timeSinceLastCheck / 12000)
```

### Cache 管理

**Main DNS Cache：**
- 容量：8000 entries
- TTL：60–3600 秒（从 DNS 响应提取）
- Eviction：LRU，满时删除最旧的 2000 条
- Cache Key：FNV-1a hash 算法，忽略 Transaction ID

**Negative Cache：**
- 容量：2000 entries
- TTL：300 秒（固定）
- Eviction：满时删除最旧的 500 条

### Circuit Breaker 状态

```
CLOSED → (5 failures) → OPEN → (60s timeout) → HALF-OPEN → (success) → CLOSED
                                              ↓ (failure)
                                            OPEN
```

### Health Check 周期

```
Interval: 90 秒
Concurrent Checks: 12 个服务器
Test Query: example.com A Record
Timeout: 2500ms
```

## 🔗 相关链接

- [Cloudflare Workers 文档](https://developers.cloudflare.com/workers/)
- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [RFC 8484 - DNS over HTTPS](https://datatracker.ietf.org/doc/html/rfc8484)
- [RFC 8467 - DNS Padding](https://datatracker.ietf.org/doc/html/rfc8467)
- [RFC 7816 - QNAME Minimization](https://datatracker.ietf.org/doc/html/rfc7816)
- [Cloudflare DNS](https://1.1.1.1/)
- [Intra 应用](https://getintra.org/)

## 📝 许可证

本项目基于 MIT 许可证发布。详情请参阅 [LICENSE](LICENSE) 文件。

## 👨‍💻 作者

设计与开发：[Anonymous](https://t.me/An0nymou3Bot)

---

⭐ 如果本项目对您有帮助，请给它一个 Star！

🔒 为自由、安全的互联网而努力
