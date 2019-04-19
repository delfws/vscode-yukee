import * as vscode from 'vscode';

const yukees = ["https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1zyi0y7eoj31o02yo4qq.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1xe54pwwrj322o340hdu.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1xe564xsbj322o340hdu.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1xe57qgh1j322o340b2a.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1xe5a534yj322o340hdu.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1wjgblgu3j33402c07ws.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1qw9hrsfxj30qo0f0dl4.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1qw9hxzbcj30e80e8dge.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1qw9i2jmkj30sg0g0dgv.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1qw9ie5cwj30y70qogob.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1qw9imjflj31400u0tbd.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1pua9m04zj32r344nnpj.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1pua3t6mmj32eb3lh4qt.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1pb88ycqwj32tc480b29.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1pb8conxlj32rb44y1gn.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1pb8itkpnj34802tc7wh.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1pb871skjj32tc480e81.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1pb8k8gn7j32rb44ykjl.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1pb8b02m9j32tc480b29.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1pb8fdrwgj34802tc4kv.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1pb8eg0l1j32rb44y1kg.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1pb8gzmklj34802tc1kx.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1p7wtnm2kj322o340nd5.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1p7wvo0zbj32tc4801kx.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1p7wx1b7fj32tc480e81.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1p7wyg3vgj32tc4804qp.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1p7x44dltj32tc4807wh.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1p7wzr7dkj32rc4504qp.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1p7x1tgglj32tc4804ne.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1p7x2yl19j32tc4801kx.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1p7wunskxj32tc480u05.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFngy1g1lyrycpk7j30u0140qls.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFngy1g1lyrwalg7j30u0140428.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1iqjnyvjtj30v91sdkeo.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1iqjp7dclj30v91sr1e0.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1iqjqluxyj30v91sdqlk.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1g2bacs16j32rv3fzu10.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1g2awusr0j34g02yoe8d.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1bziikbmuj332448hqva.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1bzijx56dj328w3401kx.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1bzil65dsj328x340wwf.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1bgnfoh3vj32tc4807wn.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1bgnj1y6gj32tc480u14.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1bgnvjh9oj32f83mvkjs.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1bgnm98b4j32n63yru14.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1bgnpina5j32ly3wy1l4.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1bgnsi5f6j32l83vuhe0.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1apqn4pd6j322o0yinpd.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g19j7rho5wg30b4069qqa.gif?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1912in0h4j32bc3h01l1.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g19128swnvj32bc3h0qv9.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1912m4bpfj32bc3h01l1.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1912vavcej33h02bcu11.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1912caxzdj32bc3h0hdy.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1912ff70jj32bc3h01l2.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g19125o1upj33h02bcb2d.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1912s4dfqj33h02bcnph.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1912p6pz5j33h02bcqv9.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1897vvnw8j33gg56o1l1.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1897ywczgj33gg56o4qt.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g170b93cqaj318g0xab29.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g13cxknboaj31ne2x5x6q.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1395f5zo3j32kl3uw7wn.jpg?tags=%5B%5D", "https://wxt.sinaimg.cn/thumb300/006mwaFnly1g1395b0nm3j32kl3uwkjq.jpg?tags=%5B%5D"];

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('yukee.fighting', () => {
			// Create and show a new webview
			const panel = vscode.window.createWebviewPanel(
				'yukee', // Identifies the type of the webview. Used internally
				'陈钰琪', // Title of the panel displayed to the user
				vscode.ViewColumn.One, // Editor column to show the new webview panel in.
				{} // Webview options. More on these later.
			);

			let countOfyukee = 1;
			const updateWebview = () => {
				const yukee = yukees[Math.ceil(Math.random() * yukees.length)];
				panel.title = "陈钰琪+" + countOfyukee;
				countOfyukee++;
				panel.webview.html = getWebviewContent(yukee);
			};

			updateWebview();
			const interval = setInterval(updateWebview, 3000);

			panel.onDidDispose(
				() => {
					// When the panel is closed, cancel any future updates to the webview content
					clearInterval(interval);
				},
				null,
				context.subscriptions
			);
		})
	);
}

function getWebviewContent(yukee: String) {
	return `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>yukee</title>
			<style>
				#app{
					font-size: 40px;
					text-align: center;
				}
				img{
					display: block;
					margin: 10px auto;
				}
				.lemma-summary {
					font-size: 24px;
					word-wrap: break-word;
					color: #fff;
					margin-bottom: 15px;
					text-indent: 2em;
					line-height: 24px;
					zoom: 1;
				}
				a {
					color: #136ec2;
					text-decoration: none;
				}
			</style>
		</head>
		<body>
			<div id="app">陛下每天日理万机,臣妾祝您寿与天齐</div>
			<img src="${yukee}" />
			<div class="lemma-summary" label-module="lemmaSummary">
			<div class="para" label-module="para">陈钰琪，1992年7月29日出生于四川省成都市，中国内地影视女演员，毕业于<a target="_blank" href="/item/%E5%9B%9B%E5%B7%9D%E5%A4%A7%E5%AD%A6%E9%94%A6%E5%9F%8E%E5%AD%A6%E9%99%A2/1394059" data-lemmaid="1394059">四川大学锦城学院</a>艺术系表演专业<sup class="sup--normal" data-sup="1" data-ctrmap=":1,">
			[1]</sup><a class="sup-anchor" name="ref_[1]_4494611">&nbsp;</a>
			。</div><div class="para" label-module="para">2015年，与<a target="_blank" href="/item/%E5%94%90%E5%AB%A3/10390217" data-lemmaid="10390217">唐嫣</a>结缘并成为<a target="_blank" href="/item/%E5%94%90%E5%AB%A3%E5%B7%A5%E4%BD%9C%E5%AE%A4/10405221" data-lemmaid="10405221">唐嫣工作室</a>首位签约艺人<sup class="sup--normal" data-sup="2" data-ctrmap=":2,">
			[2]</sup><a class="sup-anchor" name="ref_[2]_4494611">&nbsp;</a>
			。2016年，凭借出演古装剧《<a target="_blank" href="/item/%E9%94%A6%E7%BB%A3%E6%9C%AA%E5%A4%AE/17043717" data-lemmaid="17043717">锦绣未央</a>》中娇俏可爱的九公主<a target="_blank" href="/item/%E6%8B%93%E8%B7%8B%E8%BF%AA/20165222" data-lemmaid="20165222">拓跋迪</a>而崭露头角；同年，主演悬疑武侠数字电影《<a target="_blank" href="/item/%E4%BE%A0%E6%8D%95%E4%B9%8B%E5%A4%BA%E5%91%BD%E7%BA%A2%E8%8E%B2/19688898" data-lemmaid="19688898">侠捕之夺命红莲</a>》<sup class="sup--normal" data-sup="3" data-ctrmap=":3,">
			[3]</sup><a class="sup-anchor" name="ref_[3]_4494611">&nbsp;</a>
			。2017年2月，获得中国电视剧品质盛典“年度新锐剧星”奖<sup class="sup--normal" data-sup="4" data-ctrmap=":4,">
			[4]</sup><a class="sup-anchor" name="ref_[4]_4494611">&nbsp;</a>
			；同年，出演都市仙侠网络剧《<a target="_blank" href="/item/%E7%A7%81%E7%AB%8B%E8%9C%80%E5%B1%B1%E5%AD%A6%E5%9B%AD/20458365" data-lemmaid="20458365">私立蜀山学园</a>》；随后，主演古装剧《<a target="_blank" href="/item/%E9%A6%99%E8%9C%9C%E6%B2%89%E6%B2%89%E7%83%AC%E5%A6%82%E9%9C%9C/18813778" data-lemmaid="18813778">香蜜沉沉烬如霜</a>》<sup class="sup--normal" data-sup="5" data-ctrmap=":5,">
			[5]</sup><a class="sup-anchor" name="ref_[5]_4494611">&nbsp;</a>
			。2018年，主演古装武侠剧《<a target="_blank" href="/item/%E5%80%9A%E5%A4%A9%E5%B1%A0%E9%BE%99%E8%AE%B0/22075406" data-lemmaid="22075406">倚天屠龙记</a>》<sup class="sup--normal" data-sup="6" data-ctrmap=":6,">
			[6]</sup><a class="sup-anchor" name="ref_[6]_4494611">&nbsp;</a>
			；同年，主演古装言情剧《<a target="_blank" href="/item/%E4%B8%A4%E4%B8%96%E6%AC%A2/22653061" data-lemmaid="22653061">两世欢</a>》<sup class="sup--normal" data-sup="7" data-ctrmap=":7,">
			[7]</sup><a class="sup-anchor" name="ref_[7]_4494611">&nbsp;</a>
			。</div>
			</div>
		</body>
		</html>
`;
}