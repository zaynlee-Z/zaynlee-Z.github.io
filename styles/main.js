/* 鱼塘固定宽度 */
canvas:not(#ribbon-canvas), #web_bg {
    margin-bottom: -0.5rem;
    display: block;
    width: 100%;
    height: 160px
}
 
/* 鱼塘渐变色 */
body{
 overflow-x: hidden;
}
#footer {
 height:160px;
 background: linear-gradient(
  135deg,
  rgba(23, 23, 116, 0.2),
  rgba(28, 181, 224, 0.2)
 );
}
#footer #footer-wrap,
#footer-wrap a {
 color: #000;
}
#footer #footer-wrap {
 z-index: 1;
}
 
#footer .container {
 line-height: 0;
 position: relative;
 height: 100%;
 width: 100vw;
}
 
/* 侧边栏个人信息卡片动态渐变色 */
#aside-content>.card-widget.card-info{
    background: linear-gradient(-45deg, rgba(255, 225, 245, 0.6), 
rgba(255, 225, 225, 0.9), 
rgba(225, 255, 251, 0.9), 
rgba(255, 225, 255, 0.6));
}
[data-theme=dark] #aside-content>.card-widget.card-info {
    background: linear-gradient(-45deg, rgb(225, 238, 255), 
    rgba(225, 255, 253, 0.9), 
    rgba(225, 243, 255, 0.9), 
    rgba(255, 225, 253, 0.6));
}
/* 侧边栏公告栏卡片渐变色 */
#aside-content>.card-widget.card-announcement{
    background: linear-gradient(-45deg, rgba(255, 225, 245, 0.6), 
    rgba(255, 225, 225, 0.9), 
    rgba(225, 255, 251, 0.9), 
    rgba(255, 225, 255, 0.6));
}
[data-theme=dark] #aside-content>.card-widget.card-announcement{
    background: linear-gradient(-45deg, rgba(255, 225, 245, 0.6), 
    rgba(255, 225, 225, 0.9), 
    rgba(225, 255, 251, 0.9), 
    rgba(255, 225, 255, 0.6));
}
/* 侧边栏目录最新文章卡片渐变色 */
#aside-content>.sticky_layout>.card-widget{
    background: linear-gradient(-45deg, rgba(255, 225, 245, 0.6), 
    rgba(255, 225, 225, 0.9), 
    rgba(225, 255, 251, 0.9), 
    rgba(255, 225, 255, 0.6));
}
[data-theme=dark] #aside-content>.sticky_layout>.card-widget{
    background: linear-gradient(-45deg, rgba(255, 225, 245, 0.6), 
    rgba(255, 225, 225, 0.9), 
    rgba(225, 255, 251, 0.9), 
    rgba(255, 225, 255, 0.6));
}
/* 个人信息Follow me按钮 */
#aside-content>.card-widget.card-info>#card-info-btn {
    background-color: #3eb8be;
    border-radius: 8px;
}
/*文章页面*/
/* .layout>#post {
    background: linear-gradient(-45deg, rgba(225, 255, 252, 0.8), 
rgba(255, 225, 229, 0.9), 
rgba(225, 255, 225, 0.9), 
rgba(253, 255, 225, 0.8));
}
[data-theme=dark] .layout>#post {
    background: linear-gradient(-45deg, rgba(24,40,72,.2), 
rgba(35,37,58,.9), 
rgba(35,37,58,.9), 
rgba(24,40,72,.2));
} */
/*主页文章预览页面*/
#recent-posts>.recent-post-item{
    background: linear-gradient(-45deg, rgba(225, 255, 252, 0.8), 
    rgba(255, 225, 229, 0.9), 
    rgba(225, 255, 225, 0.9), 
    rgba(253, 255, 225, 0.8));
}
[data-theme=dark] #recent-posts>.recent-post-item{
    background: linear-gradient(-45deg, rgba(24,40,72,.2), 
rgba(35,37,58,.9), 
rgba(35,37,58,.9), 
rgba(24,40,72,.2));
}
 
/*分类页面*/
.layout>#page {
    background: linear-gradient(-45deg, rgba(225,235,255,.8), 
rgba(225,235,255,.9), 
rgba(225,235,255,.9), 
rgba(225,235,255,.8));
}
[data-theme=dark] .layout>#page {
    background: linear-gradient(-45deg, rgba(24,40,72,.2), 
rgba(35,37,58,.9), 
rgba(35,37,58,.9), 
rgba(24,40,72,.2));
}
 
/*时间轴页面*/
.layout>#archive {
    background: linear-gradient(-45deg, rgba(225,235,255,.8), 
rgba(225,235,255,.9), 
rgba(225,235,255,.9), 
rgba(225,235,255,.8));
}
[data-theme=dark] .layout>#archive {
    background: linear-gradient(-45deg, rgba(24,40,72,.2), 
rgba(35,37,58,.9), 
rgba(35,37,58,.9), 
rgba(24,40,72,.2));
}