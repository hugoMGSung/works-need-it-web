USE [studyASPNET]
GO
/****** Object:  Table [dbo].[Categories]    Script Date: 2023-01-13 오후 2:23:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categories](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[DisplayOrder] [nvarchar](20) NULL,
	[PostDate] [datetime] NULL,
 CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Notes]    Script Date: 2023-01-13 오후 2:23:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Notes](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [nvarchar](max) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Title] [nvarchar](max) NOT NULL,
	[ReadCount] [int] NOT NULL,
	[PostDate] [datetime2](7) NOT NULL,
	[Contents] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Notes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Profiles]    Script Date: 2023-01-13 오후 2:23:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Profiles](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Division] [nvarchar](50) NOT NULL,
	[Title] [nvarchar](max) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[Url] [nvarchar](500) NULL,
	[FileName] [nvarchar](500) NULL,
 CONSTRAINT [PK_Profiles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RegisterModel]    Script Date: 2023-01-13 오후 2:23:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RegisterModel](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](max) NOT NULL,
	[Email] [nvarchar](max) NOT NULL,
	[Password] [nvarchar](max) NOT NULL,
	[ConfirmPassword] [nvarchar](max) NOT NULL,
	[PhoneNumber] [nvarchar](max) NULL,
 CONSTRAINT [PK_RegisterModel] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Categories] ON 

INSERT [dbo].[Categories] ([Id], [Name], [DisplayOrder], [PostDate]) VALUES (1, N'Apple', N'1', CAST(N'2023-01-06T15:18:20.000' AS DateTime))
INSERT [dbo].[Categories] ([Id], [Name], [DisplayOrder], [PostDate]) VALUES (2, N'삼성전자', N'2', CAST(N'2023-01-06T15:19:30.000' AS DateTime))
INSERT [dbo].[Categories] ([Id], [Name], [DisplayOrder], [PostDate]) VALUES (3, N'LG전자', N'3', CAST(N'2023-01-06T15:19:50.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[Categories] OFF
GO
SET IDENTITY_INSERT [dbo].[Notes] ON 

INSERT [dbo].[Notes] ([Id], [UserId], [Name], [Title], [ReadCount], [PostDate], [Contents]) VALUES (4, N'Ashely', N'애슐리', N'에디터 추가후 새글', 5, CAST(N'2023-01-09T17:08:16.0468013' AS DateTime2), N'<p><strong>새글 </strong>입니다.&nbsp;</p><p>e = mc<sup>2</sup></p><p><em><del>내용을 보죠.</del></em></p><p>이미지를 넣습니다. <a href="https://www.naver.com" target="_blank">네이버</a></p><p><img src="https://w.namu.la/s/dc42bb0527e08b0d65f370f3a8ad1c471ccbd90a5f01b85343e6471c7f4100486b9be8514d380c33651c70fdc1c7da610cd2effaa9696b1226d29082faa22131e41b8bd7a75491abd0819c4789a517c02dad5059a08b5d7fd07a01c1ad6fa6e83c6fbb1ea7f05bfb88a5e26947fa78af" alt="" width="400"><br></p>')
INSERT [dbo].[Notes] ([Id], [UserId], [Name], [Title], [ReadCount], [PostDate], [Contents]) VALUES (7, N'Ashely', N'애슐리', N'tewtdfewfwdfewfewf', 3, CAST(N'2023-01-09T17:19:05.5870259' AS DateTime2), N'<p>ewfewfewfewfew</p>')
INSERT [dbo].[Notes] ([Id], [UserId], [Name], [Title], [ReadCount], [PostDate], [Contents]) VALUES (8, N'Ashely', N'애슐리', N'7일차 시작입니다.', 9, CAST(N'2023-01-10T09:17:28.5996176' AS DateTime2), N'<p class="media_end_head go_trans" style="background-color: var(--color_background); color: rgb(48, 48, 56); font-family: 나눔고딕, NanumGothic, &quot;맑은 고딕&quot;, &quot;Malgun Gothic&quot;, 돋움, Dotum, 굴림, Gulim, Helvetica, sans-serif; font-size: 14px;"><p class="media_end_head_info nv_notrans " style="position: relative; width: 700px; padding: 0px; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: var(--color_background); max-width: none; margin-left: auto; margin-right: auto;"><div class="media_end_head_info_variety" style="position: relative; display: flex; -webkit-box-pack: justify; justify-content: space-between; flex-wrap: wrap; margin-top: 15px;"><div class="media_end_head_info_variety_right" style="display: inline-flex; margin-top: 7px; margin-right: 0px; margin-left: auto;"><div class="media_end_head_print" style="display: inline-block; margin-left: 12px;"><a href="https://n.news.naver.com/article/023/0003739595?cds=news_media_pc&amp;type=editn#" class="media_end_print_link _PRINT_BUTTON" data-print-url="/article/print/023/0003739595" data-clk="print" style="color: var(--color_body); text-decoration-line: none; display: block;"><span class="blind" style="position: absolute; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); width: 1px; height: 1px; margin: -1px;"><br>인쇄하기</span></a></div></div></div></p></p><p id="contents" class="newsct_body" style="padding: 30px 0px 0px; background-color: var(--color_background); font-family: HelveticaNeue, AppleSDGothicNeo-Regular, Arial, sans-serif; font-size: 17px; line-height: 1.6; color: rgb(48, 48, 56);"><div id="newsct_article" class="newsct_article _article_body" style="letter-spacing: -0.3px; color: var(--color_body); overflow-wrap: break-word; font-size: 1em; line-height: 1.56; max-width: none; margin-left: auto; margin-right: auto; padding-left: 0px; padding-right: 0px;"><div id="dic_area" class="go_trans _article_content" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span class="end_photo_org" style="position: relative; z-index: 1; display: block; margin: 0px; padding-top: 1px; text-align: center; zoom: 1;"><div class="nbd_im_w _LAZY_LOADING_WRAP " style="clear: both; margin: 0px; padding-top: 0px;"><div class="nbd_a _LAZY_LOADING_ERROR_HIDE" id="img_a1" style="position: relative;">네이버뉴스 스크랩&nbsp;</div><div class="nbd_a _LAZY_LOADING_ERROR_HIDE" id="img_a1" style="position: relative;"><img id="img1" class="_LAZY_LOADING" src="https://imgnews.pstatic.net/image/023/2023/01/10/0003739595_001_20230110083501049.jpg?type=w647" style="border: 0px; vertical-align: top; width: 700px; margin-bottom: 14px;"></div></div><span class="img_desc" style="display: block; margin: 0px 0px 20.5px; padding: 0px 5px; color: var(--color_sub_info); font-size: 15px; line-height: 21px; letter-spacing: -0.3px;">6일 오후 서울 영등포 인근에서 폐지 할머니를 도와 손수레를 정리해준 육군 장병이 전역을 한달 앞둔 육군 32사단 98여단 기동중대 기관총사수 이석규(21) 병장으로 확인됐다./페이스북 ''육군훈련소 대신 전해드립니다''</span></span><br>한 군인이 영등포역에서 폐지를 정리하는 할머니를 돕는 모습이 우연히 포착된 가운데, 미담의 주인공이 육군 ‘말년’ 병장으로 밝혀졌다. 다음 달 전역을 앞둔 육군 32사단 98여단 기동중대 기관총사수 이석규(21) 병장은 이 일로 사단장 표창을 받게 됐다.<br><br>이 병장의 미담은 이달 초 페이스북 커뮤니티 ‘육군훈련소 대신 전해드립니다(이하 육대전)’에 영상이 올라오면서 알려졌다. 영상에는 폐지 무게를 견디지 못해 쓰러진 수레를 세우려는 할머니에게 다가가 수레를 세우고 폐지를 단단히 고정하는 모습이 담겼다.<br><br>영상 제보자는 “오늘(6일) 오후 2시30분쯤 영등포 근처 카페에 앉아 있었는데 창문 너머로 어떤 할머니께서 폐지 묶음이 기울어져서 힘들어하고 계신 걸 봤다. 그런데 바로 어떤 국군장병 한 분이 다가오시더니 할머니를 도와주시는 걸 봤다. 날도 많이 추웠는데 망설임 없이 할머니를 도와드리는 모습이 너무 멋있어서 제보한다”고 했다.<br><br>영상을 본 네티즌들은 “포상 휴가는 이럴 때 주는 것” “세상은 아직 따듯하다” “엄마 미소가 절로 났다” 등의 반응을 보이며 영상 속 장병의 모습을 칭찬했다.</div></div></p>')
INSERT [dbo].[Notes] ([Id], [UserId], [Name], [Title], [ReadCount], [PostDate], [Contents]) VALUES (10, N'Ashely', N'애슐리', N'8번째글 이번엔 안지움', 2, CAST(N'2023-01-10T09:43:08.6328241' AS DateTime2), N'<p>안지울꺼에요~~</p>')
INSERT [dbo].[Notes] ([Id], [UserId], [Name], [Title], [ReadCount], [PostDate], [Contents]) VALUES (11, N'Ashely', N'애슐리', N'9번째 토스트메시지 테스트용', 3, CAST(N'2023-01-10T10:08:11.7358265' AS DateTime2), N'<p>안나타날껄???</p>')
INSERT [dbo].[Notes] ([Id], [UserId], [Name], [Title], [ReadCount], [PostDate], [Contents]) VALUES (12, N'Ashely', N'애슐리', N'10번째 글~[수정]', 1, CAST(N'2023-01-10T10:10:47.6005096' AS DateTime2), N'<p>이제는 토스트가 나타날껄??</p>')
INSERT [dbo].[Notes] ([Id], [UserId], [Name], [Title], [ReadCount], [PostDate], [Contents]) VALUES (13, N'hugo74', N'성지한', N'일곱번째 글입니다.', 3, CAST(N'2023-01-10T10:36:48.6319629' AS DateTime2), N'<p>블라블라블라~</p>')
INSERT [dbo].[Notes] ([Id], [UserId], [Name], [Title], [ReadCount], [PostDate], [Contents]) VALUES (14, N'BBB', N'비비비', N'비비비당', 1, CAST(N'2023-01-10T10:37:01.6393249' AS DateTime2), N'<p>오예~</p>')
INSERT [dbo].[Notes] ([Id], [UserId], [Name], [Title], [ReadCount], [PostDate], [Contents]) VALUES (15, N'CCC', N'씨씨씨', N'몇번째인가?', 7, CAST(N'2023-01-10T10:37:18.0376622' AS DateTime2), N'<p>모르겠네</p>')
INSERT [dbo].[Notes] ([Id], [UserId], [Name], [Title], [ReadCount], [PostDate], [Contents]) VALUES (16, N'personar95', N'성명건', N'10번째?', 2, CAST(N'2023-01-10T10:37:38.7350915' AS DateTime2), N'<p>맞나&gt;?</p>')
INSERT [dbo].[Notes] ([Id], [UserId], [Name], [Title], [ReadCount], [PostDate], [Contents]) VALUES (17, N'Ashely', N'ashely', N'11번째', 2, CAST(N'2023-01-10T10:37:53.6304876' AS DateTime2), N'<p>글입니다.</p>')
INSERT [dbo].[Notes] ([Id], [UserId], [Name], [Title], [ReadCount], [PostDate], [Contents]) VALUES (18, N'hugo74', N'성지한', N'머냐', 10, CAST(N'2023-01-10T10:38:08.5821010' AS DateTime2), N'<p>페이징 테스트용 마지막 글</p>')
INSERT [dbo].[Notes] ([Id], [UserId], [Name], [Title], [ReadCount], [PostDate], [Contents]) VALUES (20, N'Ashely', N'애슐리', N'wfeewfewfewf', 40, CAST(N'2023-01-10T14:34:14.9751685' AS DateTime2), N'<p>ewfewfewfewfewwfewf</p><p>ew</p><p>f</p><p>ew</p><p>few</p>')
INSERT [dbo].[Notes] ([Id], [UserId], [Name], [Title], [ReadCount], [PostDate], [Contents]) VALUES (21, N'ashely', N'ashely', N'테스트', 5, CAST(N'2023-01-12T10:17:50.0331116' AS DateTime2), N'<p>입력테스트</p><p>사용자아이디로 저장됩니다.</p>')
INSERT [dbo].[Notes] ([Id], [UserId], [Name], [Title], [ReadCount], [PostDate], [Contents]) VALUES (22, N'personar95', N'personar95', N'다른 사람입니다.', 7, CAST(N'2023-01-12T10:18:57.2297759' AS DateTime2), N'<p>내용추가</p><p>ㅇㄷㄹ</p><p>ㅇ</p><p>ㄹ</p><p>ㅇ</p><p>ㄹ</p>')
SET IDENTITY_INSERT [dbo].[Notes] OFF
GO
SET IDENTITY_INSERT [dbo].[Profiles] ON 

INSERT [dbo].[Profiles] ([Id], [Division], [Title], [Description], [Url], [FileName]) VALUES (3, N'Top', N'Hugo''s Portfolio Web', N'<p>안녕하세요!&nbsp;<br>저는 ASP.NET Core 웹개발을 강의하는 성명건입니다.</p><p>저의 포트폴리오 사이트에 오신걸 환영합니다.&nbsp;</p>', N'https://github.com/hugoMGSung', N'54b275f1-a0c0-4adf-8f68-63dd2a89db8f_cat_2010-4.jpg')
INSERT [dbo].[Profiles] ([Id], [Division], [Title], [Description], [Url], [FileName]) VALUES (6, N'Card1', N'First Skill', N'<p>저는 C#을 학습했고, 간단한 웹사이트, 윈폼앱을 개발할 수 있습니다.&nbsp;<br></p><p>저는 C#을 잘해요~!!</p>', NULL, N'e89db3b3-ecb4-42a6-a784-d50565698c96_40cc3e52-745d-48b8-8a09-02c21efc36e5.png')
INSERT [dbo].[Profiles] ([Id], [Division], [Title], [Description], [Url], [FileName]) VALUES (7, N'Card2', N'Second Skill', N'<p>C# Winforms Programming</p><p>Winforms 4.8과 WPF, Xamarin, MAUI UI를 학습했습니다.</p>', N'https://github.com/hugoMGSung/works-need-it-cshap', N'e2397d3e-a63d-4369-87ae-9dfb1dcf6a62_ex_sample.png')
INSERT [dbo].[Profiles] ([Id], [Division], [Title], [Description], [Url], [FileName]) VALUES (9, N'Card3', N'Last Skill', N'<p>ASP.NET Core</p><p>.NET Core로 된 ASP.NET Core MVC 웹사이트를 개발할 수 있습니다.</p>', NULL, N'80bf46f3-20a1-4bc7-9184-bab498f4c068_capt_2023-01-13_103658.png')
SET IDENTITY_INSERT [dbo].[Profiles] OFF
GO
/****** Object:  StoredProcedure [dbo].[USP_PagingNotes]    Script Date: 2023-01-13 오후 2:23:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		SMG
-- Create date: 2023.01.10. 
-- Description:	게시판 페이징용 SP
-- =============================================
CREATE   PROCEDURE [dbo].[USP_PagingNotes] 	
	@StartCount Int,  -- 페이징 시작카운트
	@EndCount Int	  -- 페이징 종료카운트
AS
BEGIN
	SET NOCOUNT ON;

    -- 페이징용 쿼리 시작
	SELECT *
	  FROM (
			SELECT ROW_NUMBER() OVER (ORDER BY Id DESC) AS rowNum
				 , Id
				 , UserId
				 , [Name]
				 , Title
				 , ReadCount
				 , PostDate
				 , Contents
			  FROM Notes	
		   ) AS Base
	 WHERE Base.rowNum BETWEEN @StartCount AND @EndCount
END
GO
