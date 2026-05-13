import type { MusicPlayerConfig } from "../types/config";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 禁用音乐播放器方法：
	// 模板默认侧边栏和导航栏两个都显示
	// 1. 侧边栏：在sidebarConfig.ts侧边栏配置把音乐组件enable设为false禁用即可
	// 2. 导航栏：在本配置文件把showInNavbar设为false禁用即可

	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "meting",

	// 默认音量 (0-1)
	volume: 0.7,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "list",

	// 是否显启用歌词
	showLyrics: true,

	// Meting API 配置
	meting: {
		// Meting API 地址
		// 默认使用官方 API，也可以使用自定义 API
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "tencent",
		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "playlist",
		// 歌单/专辑/单曲 ID 或搜索关键词
		id: "9335440726",
		// 认证 token（可选）
		auth: "pgv_pvid=5199597568; fqm_pvqid=7d205d76-3420-4c2d-935f-f14e7a6cc9ce; fqm_sessionid=2057bb04-f152-4990-a25b-166b98babab6; pgv_info=ssid=s3096513440; ts_refer=www.baidu.com/link; ts_uid=1344383190; _qpsvr_localtk=0.4739512452038367; RK=nfxaZmFQ7Q; ptcz=a68becd4b4d54e58bea141aff7aa737a8650b5dbd65a4ac5b1e352d01e08fe97; login_type=1; qqmusic_key=Q_H_L_63k3NxKUYocFf5baQ2PPDsrkbVlC-8llYvyKqTm8fX2Oo7VoET4PtNBxFltlZwaXrBZqFo0CWlPZeC7c_zpZ618KBANkLlA; euin=oi65oKvk7eo5Nv**; psrf_qqrefresh_token=78A6F623C649CE041E6CE4DEE92C491E; wxopenid=; wxunionid=; music_ignore_pskey=202306271436Hn@vBj; tmeLoginType=2; psrf_qqunionid=C09F2CBB500CB95F5DD62A28421EEF72; psrf_qqopenid=3A1467AF852A09279A9540AC879662A9; qm_keyst=Q_H_L_63k3NxKUYocFf5baQ2PPDsrkbVlC-8llYvyKqTm8fX2Oo7VoET4PtNBxFltlZwaXrBZqFo0CWlPZeC7c_zpZ618KBANkLlA; uin=3111454319; wxrefresh_token=; psrf_access_token_expiresAt=1783868212; psrf_musickey_createtime=1778684212; psrf_qqaccess_token=757A01E8BA64BC37A551E75D4B9F9971; ts_last=y.qq.com/n/ryqq_v2/profile/like/song",
		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	// 1. 支持传入歌词文件的路径
	// lrc: "/assets/music/lrc/使一颗心免于哀伤-哼唱.lrc",
	// 2. 或者直接填入歌词字符串内容
	// lrc: "[00:00.00]歌词内容...",
	local: {
		playlist: [
			{
				name: "使一颗心免于哀伤",
				artist: "知更鸟 / HOYO-MiX / Chevy",
				url: "/assets/music/使一颗心免于哀伤-哼唱.mp3",
				cover: "/assets/music/cover/109951169585655912.webp",
				lrc: "",
			},
		],
	},
};
