﻿using BoardWebApp.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace BoardWebApp.Controllers
{
	public class AccountController : Controller
	{
		private readonly UserManager<IdentityUser> userManager;
		private readonly SignInManager<IdentityUser> signInManager;

		public AccountController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
		{
			this.userManager = userManager ?? throw new ArgumentNullException(nameof(userManager));
			this.signInManager = signInManager ?? throw new ArgumentNullException(nameof(signInManager));		
		}

		// 회원가입 첫화면 들어갈때 액션(메서드)
		[HttpGet]
		public IActionResult Register()
		{
			return View();
		}

        // 회원가입 버튼 누른 후 DB처리 액션(메서드)
		// 비동기할 때는 async await 필수
		// IActionResult --> Task<IActionResult>
        //[Bind("Id,UserName,Email,Password,ConfirmPassword")]
        [HttpPost]				
        public async Task<IActionResult> Register(RegisterModel model)
		{
            var NewId = Guid.NewGuid().ToString(); // 임의의 중복되지 않는 키
            ModelState.Remove("PhoneNumber");
			if (ModelState.IsValid) // 입력값이 필수라고 한게 하나로 입력안되면 false
			{
				// ASP.NET Identity만든 유저로 생성
				var user = new IdentityUser
				{		
					Id = NewId, 
					UserName = model.UserName,
					Email = model.Email,
					PhoneNumber = model.PhoneNumber,
				};
				// 회원정보를 AspNetUsers 테이블 저장
				var result = await userManager.CreateAsync(user, model.Password); 

				if (result.Succeeded)
				{
					// 로그인처리
					await signInManager.SignInAsync(user, isPersistent: false);

					TempData["success"] = "회원가입 완료!";
                    return RedirectToAction("Index", "Home");
				}

				// 에러발생했으면 에러를 출력
				foreach (var error in result.Errors)
				{
					ModelState.AddModelError(string.Empty, error.Description);
				}
			}

            return View(model);
        }

		[HttpGet]
		public IActionResult Login()
		{
			return View();
		}

		[HttpPost]
		public async Task<IActionResult> Login(LoginModel model)
		{
			if (ModelState.IsValid)
			{
				var result = await signInManager.PasswordSignInAsync(model.UserName, model.Password, model.RememberMe, false);

				if (result.Succeeded)
				{
					TempData["success"] = "로그인했습니다!";
					return RedirectToAction("Index", "Home");
				}
            }

			return View(model);
		}

		[HttpPost]
		public async Task<IActionResult> Logout()
		{
			await signInManager.SignOutAsync();
			TempData["success"] = "로그아웃했습니다";
			return RedirectToAction("Index", "Home");
		}
    }
}
