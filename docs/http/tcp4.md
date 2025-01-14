# TCP 三次握手和四次挥手的过程

TCP（传输控制协议）使用三次握手（Three-Way Handshake）来建立连接，并通过四次挥手（Four-Way Handshake）来断开连接。以下是详细的过程：

## 一、三次握手（建立连接）

三次握手的目的是为了确保双方都准备好进行数据传输。过程如下：

1. **第一次握手**：客户端发送一个 **SYN**（同步）报文给服务器，表示请求建立连接，并随机生成一个初始序列号 **seq = x**。
 - **客户端状态**：`SYN_SENT`

2. **第二次握手**：服务器接收到客户端的 SYN 报文后，回复一个 **SYN-ACK**（同步-确认）报文，表示同意建立连接，并发送自己的初始序列号 **seq = y**，同时确认客户端的序列号 **ack = x + 1**。
 - **服务器状态**：`SYN_RECEIVED`
 - **客户端状态**：仍为 `SYN_SENT`

3. **第三次握手**：客户端接收到服务器的 SYN-ACK 报文后，回复一个 **ACK**（确认）报文，确认服务器的序列号 **ack = y + 1**。此时，连接建立完成。
 - **客户端状态**：`ESTABLISHED`
 - **服务器状态**：`ESTABLISHED`

## 二、四次挥手（断开连接）

四次挥手的目的是为了确保双方都完成数据传输并安全地关闭连接。过程如下：

1. **第一次挥手**：客户端发送一个 **FIN**（结束）报文给服务器，表示客户端希望断开连接。
 - **客户端状态**：`FIN_WAIT_1`
 - **服务器状态**：`ESTABLISHED`

2. **第二次挥手**：服务器接收到客户端的 FIN 报文后，回复一个 **ACK** 报文，确认客户端的断开请求。
 - **客户端状态**：`FIN_WAIT_2`
 - **服务器状态**：`CLOSE_WAIT`

3. **第三次挥手**：服务器准备好关闭连接时，发送一个 **FIN** 报文给客户端，表示服务器也希望断开连接。
 - **客户端状态**：`FIN_WAIT_2`
 - **服务器状态**：`LAST_ACK`

4. **第四次挥手**：客户端接收到服务器的 FIN 报文后，发送一个 **ACK** 报文，确认服务器的断开请求。此时，连接关闭。
 - **客户端状态**：`TIME_WAIT`
 - **服务器状态**：`CLOSED`

## 总结

通过三次握手，TCP 确保双方能够通信并建立可靠的连接；通过四次挥手，TCP 确保双方都已完成数据传输并安全地断开连接。这一过程保证了数据的可靠传输和连接的有效管理。
