// Google Drive folder IDs
var folderIDs = {
  chemistry: {
    lectures: "1oPVHZTu-0h6crTCI7w47poOmzz3j4xV0",
    notes: "1DU54tBxnpx_61tA6HVhBIUpLfDVk6Nha",
    qbank: "16mfqb68q7G2BdMEZDNW3TZaxq6Q67m52"
  },
  english: {
    lectures: [
      ["Theory Chapters", "1XeSfxgIu5SkKdDakRR7y7BF2UIIllIg2"],
      ["Medical Terminology", "1tgf3OreNqtSFj8XQqGcf-2xr5Ja0XVsn"]
    ],
    flashcards: "",
    qbank: "1F7HDfJSEBBVBlmK-QWOZ2RLLMaOGi0_c"
  },
  informatics1: {
    lectures: "1_M4-pg67IyHMgdZbYQc9gqIb_aV7JSxi",
    notes: [
      ["Theory Lectures", "1VtxcmVWjUD6Z1sGmK1U9Q33OY0CYM5ps"],
      ["Photopea", "1PAVnGzFubio5cscy9fw3QxVe3q2dKBpK"],
      ["Audacity", "1BHO0x77WckVc_BGBxBpkNLenuq8wfx7G"],
      ["Kdenlive", "10cXAwVZUByP-OPrU_CIV5Ay2UuKqN-Hm"],
      ["VeraCrypt", "13jqzxgQjbcrb4dBKK8BLYE61AsX98T8Q"],
      ["LTB e-Poster", "1tJb4hQpElvPYTuW4jkpps0IZi314MsiI"]
    ],
    qbank: [
      ["ICA", "16r4UM6pZlQqACCiTGTNkCC-j5vcBPu7I"],
      ["Final", "1F6RM7Xzp6ZhqFXaEuyexCSg6uRFhoCAj"]
    ]
  },
  anatomy: {
    lectures: "15z20mqm0H83ZJ_VA9SCPmwzrC4nmo6UO",
    practicals: "1QxjP3rMKHkqoVI8ktenfVvDkqdPy5Bt0",
    prerecorded: "1lcmntkqjcFWfCKmVBV3GPRZDHzftilOX",
    notes: "1DgJGkb2wvwXq6s9U7FpTvBPJr4dnbwnV",
    flashcards: [
      ["Histology", "1LlDiXbzPZYdLaMmynKWQCBdzC1wFc5Fu"],
      ["Gross Anatomy", "1S8ItvGFdKc9h9Piy4IzvQJB5zDFNRFcI"],
      ["General Anatomy", "1WQLlCwnWZA3uSU2weQLYb8xqIQjn3Htw"]
    ],
    qbank: [
      ["ICA 1", "1R1aeXK6973PkVwA9sWuGSadO0pEOlBBd"],
      ["ICA 2", "122Nc7R2iNcFhlLaf6i_guWDaTC9QO9x1"],
      ["Spotter", "1vHfKTQnc3_dK4zEozCJSoJ6egDMJtMM7"],
      ["Final", "1KhfqZ-MIwgDdw35xujc1is6O1SP62Vnl"],
      ["Extra Questions", "19fXYbA3JGV1Ei1-VT-kVY_za7I8Pi2CL"]
    ]
  },
  physiology: {
    lectures: "1vk4Y1aJG-YQNjeefFxIQSm1w5H9FUZkj",
    prerecorded: "1yHPmxLA159iUtTkvpKXTD0emJ2k6kgWM",
    notes: "1CRc9YGNTAEgH7yyQWJeKf9T3lZcqBCpy",
    flashcards: "1XHaGMLlYVs9-6gNcwCenyuf0bjovbqoa",
    qbank: [
      ["Quizzes", "1UdyCByMFr76nfXsj8CKtnL0oav_OYNuG"],
      ["ICA 1", "1Mzu8fTXIEB-9Brj34LeQAEQNusKDR7Tc"],
      ["ICA 2", "1nT-V6PCH5_narSZGgg4uErerxBAqY0Et"],
      ["Final", "1Uc00G1fRqAQxDa8fNrvyJjiR32iIHNGl"],
      ["System-Based Questions", "1w9unOVTQqSBbaup1C4HIS2Exyd1mFJuP"],
      ["Extra Questions", "1cZErjgeTrO2pXqhYogquUzjy7cldybgj"]
    ]
  },
  enzymology: {
    lectures: "1PU-X-TFFZggCJFAHEOt0SDVsq7iZQpTQ",
    tutorials: [
      ["Tutorial 1", "1zbO8jE7QibNMKZXlXMHtAebujBE8znZx"],
      ["Tutorial 2", "1wfqETUWFI_CcrSprWJr4nhOg4GW9GKaZ"],
      ["Tutorial 3", "1SiHU6m7d-R19cSikSWIk2J-dYGSOk-tX"],
      ["Tutorial 4", "1Qycd4CLqk_UUikGC08zuPwVges4xb5Uo"],
      ["Tutorial 5", "1uUBZ1yrrq_bNoE_ozjFOAbm1SfXgdW15"],
      ["Tutorial 6", "1TeaWnHuc3m4nzKgPHA4rhtKCpdSGJCJ9"],
      ["Tutorial 7", "1bSIz8tSbXCJupqz6W0e5G7l7pZvL23UZ"],
      ["Tutorial 8", "1L370HEa5DAEi83sUbWAuk0z1CDzJAYzE"],
      ["Tutorial 9", "15u9U5tOpwVj0NqRkhOElGUlg0YVa0h0N"],
      ["Tutorial 10", "1W6JvDvujdMlH4Pc3vlhijzxfLyUEL8F-"],
      ["Tutorial 11", "1ChRlrjI0f-c3-xRZ8UNKalAn2az7MTKc"],
      ["Tutorial 12", "1aXyWQRXyeh8Mtj4C5UUm2EW0QnX5r4FM"],
      ["Tutorial 13", "1UxGdG6B7i_EBCANLgQzr5UYz8_OdSPwX"]
    ],
    notes: "1aLm0_Q5R4abbqzIEjKt_ejCdlNu19Xb-",
    qbank: [
      ["Quizzes", "1beS97fNKmaNM30GgcecluGI_Ixijd0wR"],
      ["ICA", "1e5SUymY_iM3WCUKZE5drUnodMkAfK-mn"],
      ["Open-Book Exam", "1nILDCgU7812XvweZa0DbguTcOaRsDref"],
      ["Final", "1eFyR3P-cGNNLfbE_PxRsU7LsU-WLfU76"],
      ["Extra Questions", "1DkYjwZEAZMa-miEV6_jwlZAxDlZFP9Is"]
    ]
  },
  cytology: {
    lectures: "1B5ioEI1jp3eH9ndY011agaBHipdhv08k",
    prerecorded: "1cAZV1-FUWyBYr8y_Lk-atDG0ZALoH9T9",
    notes: "1IMA6ihVDKO-Znz5y8nMM6xrYo2ypCVpY",
    flashcards: "119_hTmqMf3Y0OP_XnQI9CEzfRNYM6QbD",
    qbank: [
      ["Cytology Questions", "15K4dEf8bamzvq_0ZfiyOd6_XZQH38Hzd"],
      ["Pharmacology Questions", "11RBJXIaKqsUngHEbKLXRIUJb-S_lN8bb"],
      ["Quizzes", "16qszJ-GU4huhVT_cAEcihQlHyBDetaZg"],
      ["ICA", "1VJPt9jxAd2-rRyIItBpG_dTjPIz69drK"],
      ["Final", "1abTmWU7TaqVBlIfVm4C6BVtpt4nxtxFm"]
    ]
  },

  rip: {
    lectures: "1wk1yvQ28aAaExAsFriho3KvdMmxVm51o",
    tutorials: [
      ["Tutorial 2", "1qveUVDcWrR_XW1ZXraTTG3kZsRk7GYtH"],
      ["Tutorial 3", "1G76OQ_30pCREKTGAwlE5LlBZh1Ymbl6v"],
      ["Tutorial 4", "16N7KlrsQ6DEdGmNaLXRDt2uHwqUmFDEt"],
      ["Tutorial 5", "1qACThJ0k4Yn7zR_9U2pesIkhCGBdBIQ5"],
      ["Tutorial 6", "1ygsAMpc2M6uz1NvCJhH3nKxxxr3w5K2p"],
      ["Tutorial 7", "1FvGMxvnyK3ZiJbiiw-MWLwNywBYau2qy"],
      ["Tutorial 8", "1-1wE6gZODhtZxLrukQsZRSbARDt5IGCf"],
      ["Tutorial 9", "1RX4Xzph_bel4lZDuIMfqjv8ug5LAlC85"],
      ["Tutorial 10", "1eCn6I1uDj4hUXpF50scZGDeWEmgwXAdC"],
      ["Tutorial 11", "1pntglRsG28AphqxQJo7OJCHe9tGlVZja"],
      ["Tutorial 12", "1BXzx5e4TeoGeVFp9Zo9MbS2JNuFHjA8S"],
      ["Tutorial 13", "1zg1Y4C0fA3V4UpJo9t1kVoQz4HAsdujx"],
      ["Tutorial 14", "1guo6XpJep5eZsDvEHbage4IkI3kI39HM"]
    ],
    practicals: [
      ["Practical 1-5 (Bacteriology)", "1yHMF6u-zgAriINoA4JFZ_X0anZABFk13"],
      ["Practical 6-7 (Parasitology)", "1hVQraurvsi6Lk9qdMgr5I_JnuIzDAMxQ"],
      ["Practical 8 (Virology)", "1uNs9K8rW4yWvGKVoaSqaZ1rDcIYrOMYn"],
      ["Practical 9 (Mycology)", "1mnk4AX1q9JC1ttu0sZcevf7Mm8hJYyxc"],
      ["Practical 10 (Immunology)", "13xsz22JMw1Api-HIfSzLxKMPdkjcuMwE"],
      ["Practical 11-15 (Pathology)", "1-V0OZuEOHx2J_sZGrUvq4EAWjv6JVuKH"]
    ],
    prerecorded: "1eL6pF7965ZtdTAkr8ZAkd7yaG-XNcHyU",
    notes: [
      ["Bacteriology", "1W3xwbgf9HsMh_qsNtYGUhr5DCL_Q5zUG"],
      ["Parasitology", "1-gyxtUCZIYDPSp6d72TDdswtAQFAFQbx"],
      ["Virology", "1nnWqlrrDAlKSgwk3XikB4xdBKLime9WS"],
      ["Mycology", "1lkl2vD2dGH0iwHxzLQ13XkSc5yE_7DC-"],
      ["Immunology", "1nDL8FnBkwSD6C5LgCTD8amSpT3x2KJUd"],
      ["Pathology", "16Yczs49qlfoUF7HswkzkRoGLrXxL11vZ"]
    ],
    flashcards: "1wmPnH4h25Iwt5RKglPZH9omkMnjtLEZn",
    qbank: [
      ["Quizzes", "1Pt90efYo2CraZdq9qj27SGFepjsL51Vf"],
      ["ICA 1", "14KwR5E7CyOUfRHLnKlEJfInsAlUxpFGV"],
      ["ICA 2", "1GgxFavaneTDwr387yt2loKQm65KUeF-9"],
      ["Spotter", "1nq2AZOLRquTBt6h3SjFwyqM6Na20nuF0"],
      ["Final", "1YT3LrgC69TsPZP9S4H6P98fIj-Vg5bXh"],
      ["USMLE Questions", "1zJAFI6pLtKyMKJiA3t3fsKNFSf0hvSuJ"],
      ["Extra Questions", "1NZhFOd15ZrIM0BuCau6IT4PrF_8u2lWw"]
    ]
  },
  sfr: {
    lectures: "1Qm-KbyxHZ61IRpxj2hryl83lnpFQJENd",
    tutorials: [
      ["Tutorial 1", "1sW0hehIV3nL_yjxvQKWahXKBp4l1SCTA"],
      ["Tutorial 2", "1JIu4tykryCG2kH3RSx-72WYCez11QdTt"],
      ["Tutorial 3", "160spRyX3W1bgqQkaQNY9R9saGB8mT_qr"],
      ["Tutorial 4", "1U4ODm2SHPXXTxrhLdLuvIUzDJK4Ax9ti"],
      ["Tutorial 5", "1HqOky4K59C65Wf1b8atOH82tOls8l7tL"]
    ],
    practicals: [
      ["Anatomy Practicals", "1VuaA_8SAfl7x6FK-tpbvHJM6X_a-0Xum"],
      ["Physiology Practicals", "1lk2j0vFArrduJfqavoIU4q06ZRC3Vi5j"],
      ["Surface Anatomy", "1m2nRO3eKjL0FT5yViVbI9R-K1x3Jv6g0"]
    ],
    prerecorded: "1FVKNkdXnBCuYUwAyl6U9qILi3i21e2eP",
    notes: "1-Mps0wDVmMuYgpVbz3FNMx-rpK1dLIKK",
    flashcards: "10zT3G2EVtU8U3ZQSEDQNWImG-8Gm_F7j",
    qbank: [
      ["ICA 1", "1Itlwa8r1l-L0P58ri0PZbkvElYSQ-G-L"],
      ["ICA 2", "1-udqUQSYBkm8zHN8BDFJEX45Ot6kBTvj"],
      ["Spotter", "1or-KYWZ1E2_oI8ZxoGiU_Z2eeIoTTFK-"],
      ["Final", "1cMWueoyuh6hiYpea4lpsaPK4bt6w38tp"],
      ["Extra Questions", "1IiBPQ7j4W2wLia096nYmza-IPpQp5zL2"]
    ]
  },
  hospital: {
    lectures: "1581jX_cmm2LI8EYy8zuzZn5ohpyb0_nh",
    tutorials: "16XShOJKy5lvk0cr2E1BZOOM_XO7JdxGk",
    prerecorded: "1lglglCCkH7I1GQvgshoeyviMSp2KWIEj",
    spss: "1tOAiUbVIxDPxzctqXaNIMUWp_bA3b5_D",
    essays: [
      ["Information", "1_0UilTPYtExTUfAYNHetpv2KmRw0C6p_"],
      ["Examples", "15vzBj-985x54lGMXGwLy9MH1yUiIEv_b"]
    ],
    notes: "1s8M-BNAQ7eBbgjdHcT_oHKbZWP0xcsnM",
    qbank: [
      ["ICA", "1-SyF3jWCHC4P3KrjiG11kdcU4Mo8G3cK"],
      ["SPSS Exam", "1qANIQ4NgiR7B8IyHbDT8-U0VXnRZc0Hu"],
      ["Final", "19UhKNhCGd-eWAVD8Yjt_tYFuHQDSYQq-"],
      ["Extra Questions", "1AgUCh6egXBmAuwtXjJsQokL-IkxniE7v"]
    ]
  },
  molecular: {
    lectures: "1TRvIbV9nJJu-8ujzc7Z3oL8kZYR70ReS",
    tutorials: [
      ["Tutorial 1", "1HFtBrGNP2HLY6ItORb_GUwNjWv5EgM3c"],
      ["Tutorial 2", "12WnBxweRQsloe5KS8G941OVrbLH5eiDR"],
      ["Tutorial 3", "15wevEuhatiloQxZivivGwNTKVcdR8Ztz"],
      ["Tutorial 4", "1OTKT9vH49ED1ZfaYNIASYtvaPolF5gkd"],
      ["Tutorial 5", "1E7nw7WosdCgIUGOMuWbYQCe7pwp7An5G"],
      ["Tutorial 6", "1ofYppEXPkXulF1tOC9lx2m38uEVN74v9"],
      ["Tutorial 7", "18rOY2kxA_0VVQUsjmCpenUQfqBQlbBlq"],
      ["Tutorial 8", "1rlnk2vT3srN4H1-fR7_j8ou7bgZcJuRm"],
      ["Tutorial 9", "1IWtIcCRGN3r9wmbDCb_HhfxrLZhfmhqV"],
      ["Tutorial 10", "13S4EUM50OoQpytzO_e7YYQkFDXcgjM2L"],
      ["Tutorial 11", "1SqSEPgMnUON8Q3DcDWryg346rk6HIcOq"]
    ],
    practicals: "1HvXu49b03xwM8VgIPMW4HeY1IUgbsWSG",
    prerecorded: "1FAav1E17Z7Zs1-7rPSzPBh6gWEOUpceE",
    notes: "1QqJvTISJ5GmWgHnMaWr-6hit6MYcKitL",
    flashcards: "1INLp_6q1fdAg49YSZfVP7D8HcaQIGN43",
    qbank: [
      ["Tutorial Quizzes", "1BYuCC6f8J5rX97LJoSmT6T5gcHE6iBwd"],
      ["ICA 1", "1LNx3VFmOcXol_fqf_SBSdmAZG8rEF1e-"],
      ["ICA 2", "1FYk53zrwNZ84vCNi7ZycwUT5C1xxjtBJ"],
      ["Final", "1Xt5Vwjli2r-9sPWnfSiOcf3lpWkf5jAc"],
      ["USMLE Questions", "1DPzZR_jm259EOLndRgieu96hXaBTLZi6"],
      ["Extra Questions", "11GB-SuFg7KjjNqW3rSjdCtJRTQAnudVo"]
    ]
  },
  growth: {
    lectures: "1tAbegwYEhgJVhVTWnNqh8W12CvcEjn7Y",
    prerecorded: "1QKqpi9olIr-8YXLppnojbFKewNWn-0QJ",
    notes: "1a0eQhWUBpmf80og7_ghKBkG1vHZO6DAy",
    qbank: [
      ["ICA", "1Bih_A7JVLx-ezX82I84fFMhWakVxLA8e"],
      ["Final", "1Nr4BbAG72sWr6C0PdSMOvAx1vJ33fOoX"],
      ["Extra Questions", "10iyaQ_Ot6ti-HBZTHsvZm8sYrV_mJARH"]
    ]
  },

  cvs: {
    lectures: "1NWIFyshwh-YMB2C8tq9eDmXR_BcG2gXe",
    tutorials: [
      ["Tutorial 1", "1jpr2Szo8K_gsi8liP3JBC4bAsLQfgT6c"],
      ["Tutorial 2", "1li8KQ_ujlRmjBqiHE86KVrZ_zyagJztq"],
      ["Tutorial 3", "181B_2k3jtKXXcbd-wSGU5WskWkDD1py4"],
      ["Tutorial 4", "1LhJ1kBSQ_gVAk5PpaM188ISSazJoiURd"],
      ["Tutorial 5", "1ZK5k7wLuvpwGKHAUGXF3me12bg9jO9jC"],
      ["Tutorial 6", "14bfBrW1_YblNvsQnh0H2KN4WVEGYJtVJ"],
      ["Tutorial 7", "1JUAr1VHD_8VLVzM61zCXvGcDVpV5kngr"],
      ["Tutorial 8", "1cUvH89USCifCNgfLzR1pQZvv9-vO1-M7"],
      ["Tutorial 9", "1_pL2vX4SuDRlgZPmSMsviFdxZKphEkJP"],
      ["Tutorial 10", "1SA6Xg9k5GP3fMEkLx7hX6twSw-igk-sx"],
      ["Tutorial 11", "1izOr_4ZOssJdUqzI8p6iEdXJ_czPS2do"],
      ["Tutorial 12", "1jvplpoqush5ofJM5AFKGR_Pec6sv_usP"],
      ["Tutorial 13", "1ui4QtFl-9EHAHKfv1sxhO-yY-LdZ-XJl"],
      ["Tutorial 14", "1fLH7kXGd-llBdN-CbvgLlMxSYXznYD8b"]
    ],
    practicals: [
      ["Practical 1", "1N3UN8uLfnvtC3tOynvusghJH9r48PhCB"],
      ["Practical 2", "1VcaWM76Y5HuaOqd6W2Ns3tVaKA1XHXLy"],
      ["Practical 3", "1mWajswl71aUvr8UZcMyZLJRNV5yvBcVg"],
      ["Practical 4", "1fhu6SMGDIORRCWq2HII2tviJ60kSfnIY"],
      ["Practical 5", "133jNdcbBHcGT1kD5vzeRWJYnknVGLZeH"],
      ["Practical 6", "1T3hSzHj4hyjwR7JdCIjacHhU1M6RDLac"],
      ["Practical 7", "1SCv2bPs6SR61LVYAk4TQyw0zrCMd68r1"]
    ],
    prerecorded: "1X0PBn9UCZBJy8imtv18dWeWh30EDAP3h",
    cases: [
      ["Case 1", "1M-swgsSy2GsdYU1XCq4g33aEuJx6figc"],
      ["Case 2", "1KfoZh0M5VkAiSSqlDLbpBRRk-CbAmrLu"],
      ["Case 3", "1ZUe30m4B7U2q7zjgT1LY0UiVQVQZLX7X"],
      ["Case 4", "18fL2eZvmGtPKkVyBV7Vq7Y13U_4whgo3"],
      ["Case 5", "1e2qq_dztbLjUjhacMQZquq3T0w4HnpjT"]
    ],
    notes: "1RHih4Vy_-IinrNxUcOCLOp1_Tw53H0qw",
    flashcards: "1aXphSOPZyZz0GlVf1uJtJXirEsK2cT4v",
    qbank: [
      ["ICA 1", "1KZHEYCy3ju_Zl76X_CEXcxGeaX2p0MLd"],
      ["ICA 2", "1oCd2sdMWB2xsPW1ljlUec44sI5GTEpWl"],
      ["Spotter", "1jVmDcnFEtj5Q_D3D5U2q3j51pHq-wF4e"],
      ["Final", "1RIKL8mWUs8KM6n0pdlBOvTEO1cqzYWYn"],
      ["Extra Questions", "1eHdG_6hoJY9wV_6j6eQ1P_YhE5Y_1PFn"]
    ]
  },
  his: {
    lectures: "1ukeGhQxcYoHVlTBFmvDsbs24XkHF7m4b",
    tutorials: [
      ["Demonstration 1", "1MUTeBODgYvMV80j3mzLd6KYeZIb7ecbn"],
      ["Tutorial 1", "1k0KDE4LPT36OQ0i0Pbk8xV-mvvEDJIiW"],
      ["Tutorial 2", "1lB5SvtAOuL-nzYL1TqVhrIHblFH8N_0a"],
      ["Tutorial 3", "1j2KdtsZDgRjY9_S6EKgbfFLRpJQXkhJ1"],
      ["Tutorial 4", "1lr4OURePvbd4al2-2QxyJHhF66I7Gkrr"],
      ["Tutorial 5", "16116qAu9X6IaX5K1iBqrCkmb9IzwM1dW"],
      ["Tutorial 6", "18HhZ0jHzaTGFQc-yosA2_8YXHWWvJW1G"],
      ["Tutorial 7", "1PHQ4bd3CXemGar_dDkOKKgdv6klyH2vP"],
      ["Tutorial 8", "1s8r1SRw_FJgvq7AOcpUA5MZvbAuva90b"],
      ["Tutorial 9", "1HLqKwnBOfaS-kiaTaJ1aWqGH5cXv2c1B"],
      ["Tutorial 10", "1-0JHtJwLOz9YuDBuke-hezgQ9JDFGrZ4"],
      ["Tutorial 11", "1vwLrrtZzsz_yvue2vNYbxlocQ-MVUG8r"],
      ["Tutorial 12", "1qr4Mlq27cuKPbkO4lofC6Ujp7j3aaRdr"],
      ["Tutorial 13", "1QMRwHpdms58wvJJJ6gEsL5mX8ewt-l5J"],
      ["Tutorial 14", "14eMGi4S8xHROmg-MpLCuvyJlqafw9ptg"]
    ],
    prerecorded: "1FsKfCeM02UCkbzlExwrPEPY_FONr-JaQ",
    notes: "1-9_Ntwd4Z5XIb6rJRShiGeFvCpwq8FIW",
    flashcards: "1UOK5ylK0QY4qpJQzRO1AqNwjmeshEt87",
    qbank: [
      ["Quizzes", "1W46rHuRNxczpvhdV6GxW3kCUpsN4VPqX"],
      ["ICA 1", "16vAK4VQuFeUMDgunNX9xpsJtCqw5JZ41"],
      ["ICA 2", "1JWwRFFiQL0LEyV5EfHnLfYT--U8SniIk"],
      ["Final", "1EhfDJfRkaGrWfukllb2MtmBhSQmWc6Ub"],
      ["Extra Questions", "1kMnTj7PwZRq5Jv-FRAEWzv3MgTPvUN5K"]
    ]
  },
  integrated1: {
    lectures: "1YREneDIvTvFAjlr9tf2a1y_0yxy50i6z",
    cases: [
      ["SC1 Unintentional Weight Loss", "1QOrJh7OwyuAlbTqT8aGAsqX3nHPhDsi3"],
      ["SC2 Infections of the Phagocytic System", "192MgEdgmvBc-l6XxI4GOIXghcAqt9F6a"],
      ["SC3 Cleft Lip and Palate", "1HqLqQMA1FKxJ5NpxBR8KUqDjLMy1kTx-"],
      ["SC4 A Lump in the Breast", "1KilJabLJCAisEJshqlzXzgm_NkjqOGPm"],
      ["LC1 Dyspnea", "1zhPIiOTmvWEA1WfYp9Ng-s3ycsnvhtjJ"],
      ["LC2 Cough", "1xoCnFsk9lVS86xr_KifP-7-OEyI3n9IP"],
      ["LC3 Fever", "1ME0HctwH7C_g3uBkVlRTs2hLVzlMdlPY"],
      ["LC4 Edema", "1Zngxwbolgg_PSuWsyTzfvxOvZIYaDO3X"]
    ],
    skillslab: [
      ["Skills Lab 1", "1YTwznmXSD2uEg3xnxf4HJHqN8iBsDl2T"],
      ["Skills Lab 2", "19XmiNrKSxh_0EDs8htwdTHI_ye-H14Vq"],
      ["Skills Lab 3", "1exiBF94w4_czjn9nKNy4tikq5s15YTp4"],
      ["Skills Lab 4", "1pk1l6X-9FwNtOHz-tOpz7puZuEa67G8G"],
      ["Extra Videos", "1060eQK1qPJR_yYQb8LYyR1HjdC37CHCu"]
    ],
    notes: "1Mq77U74jSVX0jiXyFZrBdKVih3LB-lE8",
    flashcards: "1s6eKcHFfdOINwTcwl0CKVQP73II0jCZ2",
    qbank: [
      ["Quizzes", "13qArqzG_kC4iJVNHSvDOxfVI2QAha1hE"],
      ["ICA", "1Gucsam94NazHxSo3BUMiuFv9ht2y0uEz"],
      ["OSCE", "1I8H3avBBIHyZ5HnvqL-cQJ9h_yn8_z0M"],
      ["Final", "1VrFmnyoSkPXK7UQvxlGiQOrELXNq3HN4"]
    ]
  },
  respiratory: {
    lectures: "1cGydAV7-MRyVT1R94g3tMMjp1smmR9SG",
    tutorials: [
      ["Tutorial 1", "1RL8PEM5Hc8dAmEAKCGN9vmXzImU7Nj-9"],
      ["Tutorial 2", "1Dtk6R3Y3uYN0xkRaEFCL7BQMp2FUdNSQ"],
      ["Tutorial 3", "1_f1uW7mZIxH9WdzzDFwpNmyVFT_9nyFy"],
      ["Tutorial 4", "1awiAI7aLzmbjo1pXn82lwgyP4i_yYpNB"],
      ["Tutorial 5", "1FO78hW5WJGN5jRxwQ6krgX0AY4MgDLxG"],
      ["Tutorial 6", "1vfgwAWvUcrhfM6dBNx_fNUXHiG9zO1sc"],
      ["Tutorial 7", "1-ZEXZC7YYnrY0TR_9EtIHEGE2liIVJEl"],
      ["Tutorial 8", "1PD9A7PZe84jXWrPmKxuYmE9iVt0qEI3N"]
    ],
    practicals: [
      ["Practical 1", "1z9TKbof9Hg5QDYvOXdrPhaWFjvWmKOC5"],
      ["Practical 2", "1owdtk0gPu7Br1dqvmnk7qmh4D17E33kv"],
      ["Practical 3", "1Jb17XljpN-yPvekWBFQMBLIxp5VHWL0c"],
      ["Practical 4", "1DKkfhNyJ3r-2g6_EM1dwIwZ_gJcBvHvW"],
      ["Practical 5", "1tS1rj6tX5jlMdFiwf4j-iUP1NSTRgNCe"],
      ["Practical 6", "1NIL_oyI5SFPfWKbvDc3kZHyJuHj_ltgf"],
      ["SQUIH Histology Program", "1lMXYCyXszllFa2zgBZDsi-xk3EvGQIyi"],
      ["X-rays", "1m5daD6glbnZFKdybL-xpjfrGINn-mDi0"]
    ],
    prerecorded: "1-oOEiFE-qFe2AeIOqiP7yYfkSU48LSEX",
    notes: "1rHCSBDQcR5sgRxwfpg6EHaIEIuiNflDV",
    flashcards: "1xfD1XLVxRtindRgyFKuaYFTdmR_wn7K_",
    qbank: [
      ["ICA", "1ZDkvvArQ7p37y8nNLPt14SpB_XJxdF_o"],
      ["Spotter", "1zb9ESFQczwLSanjvN-ycN9Cej9ElOpld"],
      ["Final", "1S1AiWoSwQ8YkicXRnP70IyjUAxVrjUi0"],
      ["Extra Questions", "1xcfTc-ynSjr7Cmk0pm0qHcsqxH2F8gH8"]
    ]
  },
  informatics2: {
    lectures: "1fhS6PxRPUDtUgz-RRBiRQiGx_SkLSEnB",
    prerecorded: "1E8v9fKJXa3ri7GFNriG2pP2ohhTrrLTZ",
    presentations: "1C0GT9TqVH9ec0zhDxLfMLbALxdn4kc-P",
    notes: "1Wwqvnle8jt_iLekbktbLWWEPECUeU5JA",
    flashcards: "1nZfufZ2tAsF6tDNIo8if7KxWEUrnZcrR",
    qbank: [
      ["Quizzes", "1Alu0Pl0wA87ZhPpM8MtMl4skazRM1Q39"],
      ["ICA", "1egu9HV_H2zVdPaV2pMnNnEbB2kLNorNd"],
      ["Final", "1amNF51s-oTSu2b4cDw_BbtdoLJqevFST"]
    ]
  },
  research: {
    lectures: "175mppMjD_UekiryP8PzzM1AXZIjVlJMQ",
    tutorials: [
      ["Tutorial 1", "1mgLKf5puYALvcXumjLSPTy_KnkB1ERFy"],
      ["Tutorial 2", "1VwW9c_fF1unEoje2Opub2Olz8vLKNZHy"],
      ["Tutorial 3", "1pcRANeuXwRO3xy-OSLZOCsNzM-aPml9f"],
      ["Tutorial 4", "15V--lJE_pQehVBubTWaolKQ8yfLp5yob"],
      ["Tutorial 5", "1p2fhxa0I6M0gwTiWigQAGUiqGucNA4xy"],
      ["Tutorial 6", "1XfhOOE4bzNmgMU2x2Y7qf4RXrE-D6NWQ"],
      ["Tutorial 7 (SPSS)", "1WfjvHMA8QswYOCEPYtxyHHtp0I29cFOF"],
      ["Tutorial 8 (SPSS)", "1o9eXrBhJhgxYVRZK2ODq7gZ6vNzwuce0"],
      ["Tutorial 9 (SPSS)", "1rw-qN3aqU4BWhOm1Qn2BFnWJXEjuHzi3"],
      ["Tutorial 10 (SPSS)", "1eXSWmckEX4dbgRhjTrsh9vC_hTZdPkmg"],
      ["Tutorial 11 (SPSS)", "186Xp11CrQxOMrF_WMNUdZGNLlrZAPj-z"],
      ["Tutorial 12 (SPSS)", "1TuCyEdTwb_ZGH01q5XQuC_qhOCE4iEl8"],
      ["Tutorial 13", "1TePKyM7jwHmYJFiusCOcWG35vBfbpchh"],
      ["Tutorial 14", "1XT2R3s5UVikfFsp1T5sLJqxbKONFfj7A"]
    ],
    prerecorded: "1wkVQmPNDj2E4rgfMiEJ-c3vyJRrTe_qs",
    proposals: [
      ["Information", "19frlMyolpWiehZesCXaTY4vATFETXUFI"],
      ["Examples", "1Xxc-1qHUkZDp0h1Pj4ba9bH1iKoHqIDQ"]
    ],
    notes: "15H7CyLUD4GXJR5ZSqi028xNrPRM5oqKu",
    flashcards: "1XOKZzpqH2_zBlWDrDWWh8u1JuSfyoeyn",
    qbank: [
      ["SPSS Exam", "1sW6Ql2bJz9A-DzQegea5NYuvBHOAkdVL"],
      ["Final", "1-1R8Sc-3XSxnmbQm6Y23i1Pfx5uD3SVF"],
      ["Extra QUestions", "1AgUCh6egXBmAuwtXjJsQokL-IkxniE7v"]
    ]
  },

  alimentary: {
    lectures: "1X6x5mIg1xeV3uhg-6w_37iKgHSrWOYcf",
    tutorials: [
      ["Tutorial 1", "1A3N7QNRkIX5DC04Kb2HIUAeqrKkdG1bv"],
      ["Tutorial 2", "1elUL6id-_7_8FLdU9_MIXIJgLaQlcz_L"],
      ["Tutorial 3", "1FXtpXHWTodUlr2Gw-dSB4Tk-Ctqb5uRh"],
      ["Tutorial 4", "1oWI1eN_K-1ATadB_LgSlGRx0BWXhIz6X"],
      ["Tutorial 5", "1Hpfizi673ze_oy4rq7FH19aa05v3DXfn"],
      ["Tutorial 6", "1Iz55g_HTK6PDzTplB5iLAV3a7Lh6RLDN"],
      ["Tutorial 7", "15DhSIKZ0jJjiFTw4x1N3fu8cGtlqO2JZ"],
      ["Tutorial 8", "1zZH7nLC4O5poERvi301TDISL5gu3vnjU"],
      ["Tutorial 9", "1UQI6XCK0vPlgFT5B_rHJEq8WzwY1gD5K"],
      ["Tutorial 10", "1UzGEWbuGMNXtPpK70COutyWF1yru91s5"],
      ["Tutorial 11", "1xsACAnrPJBfW9FXy_0zNKpR6F4lF33sl"],
      ["Tutorial 12", "1b7tC0jVePbZBfdIUOOxKUnTPTSy2gLYQ"],
      ["Tutorial 13", "1lTE-qGFYr7uU1Ak34mM5X0fEBwj65Fvt"],
      ["Tutorial 14", "1I5BAW-zjmZmge_8-cU7Uw4mMfJnrYJWU"],
      ["Tutorial 15", "1qOfEtpj-duKNf8cX5Tv2jn0VgyNMuniV"]
    ],
    practicals: [
      ["Practical 1", "1dvkViAWkLQ7eavekH0qaNBim2lMMQ1jh"],
      ["Practical 2", "1lx0izY8DeKgEgrBVSZbSNxxqC5d5m0np"],
      ["Practical 3", "1uh9bIzbqzeaRwBYO3K9Kw-x-SFvrwvn-"],
      ["Practical 4", "1gqvrhhMIEC_eIElnSaRc-akQxonPD6JE"],
      ["Practical 5", "1L_UpJFJcArrKTYpy7-aFE5IYA8wh15CQ"],
      ["Practical 6", "1JvncW3NU-e5fgDVTfqTCgOJtOYAbtMA2"],
      ["Practical 7", "1anCoHTX9uNn80RQC9oH_C-pm-UtducLs"],
      ["Practical 8", "1GyTXevz43b1OqZS8knHO_lBxPMtiFpg2"],
      ["Practical 9", "1MOW9uSaibdCeLq124EPThtJOm826EulB"]
    ],
    prerecorded: "1Dv9I1SLTM5GwrdTXXWO5i4u5gdIhpejc",
    notes: [
      ["Bayan's Summaries", "19fWsvdVc3U2bcb6Nay_IcmyNoGngEZTa"],
      ["Handwritten Notes", "1jPeGoYBPlMp1jcu3ZBX2TqxwES1useks"],
      ["Jihad's Summaries", "1dKb92JDMiz_jR7VQQ0kPlhGoTtyQLM05"],
      ["Extra Notes", "1r_H0K7M_xFQdkFPFxFr-J9zgPSLfOBaK"]
    ],
    flashcards: "1Pggb_LSvqjZF7dAKzEtJ1WT9sWVBGLP_",
    qbank: [
      ["ICA 1", "14VihRnf43WZoOOuHc9jnZRqs6M6_5zeA"],
      ["ICA 2", "17veD21nbSqpibKNNvttmuvY5Rh48-ZWr"],
      ["Spotter", "1QcUDVTmlCUsibH3erUqL-2otsWN7428i"],
      ["Final", "12F1GMy57oL4LNi1G7daXeF4y-yAlabQa"],
      ["Extra Questions", "1w6_KAj4CGfjMGPuqL1-V3pgCGFwK1bT1"]
    ]
  },
  uroreproductive: {
    lectures: "1k27RnnNbDkBb_M3Gg5VL-V4jY2jEBVe6",
    tutorials: [
      ["Tutorial 1", "1mSoVUUmzvo5xaHCBpgMkzdKTFGRXo9wK"],
      ["Tutorial 2", "1g2wNWeUP3tjjWD-ghSZrlrHtWmKGiyCJ"],
      ["Tutorial 3", "12eLu6PclMj1liO5IMiTnASKCr09nQeBp"],
      ["Tutorial 4", "1Fi1ua9X87TWC_OmKNGPpnTkRK_KCVUu-"],
      ["Tutorial 5", "1wDBRdbPWLSdwxZ8F9pPD8HZ22sqwS6nJ"],
      ["Tutorial 6", "1LCT9x9OwvSrpsKnkgfanea-eiDIIxpXA"],
      ["Tutorial 7", "1oRJ8KAaAdxWHWbcJrngBBZfaqWWDng76"],
      ["Tutorial 8", "1j1BugAoP1L3xXOiEkDoPaOFZuUmAb7tQ"],
      ["Tutorial 9", "1T_9bC-A3yIK0jUttYOEGYovbrIlzBNzl"],
      ["Tutorial 10", "13VN4yoSGF8VurU6BRRB6TrXSV44Oh5LR"],
      ["Tutorial 11", "1k2lFbxdfqbBGXhg_GNJxhDNtQcem-SyW"],
      ["Tutorial 12", "1krypzhJcQHpxQlnwMFY_bAd8UzbINWFu"],
      ["Tutorial 13", "1ZgtA3iygOZzD44urcpidoxmuRUVrNu9S"],
      ["Tutorial 14", "1g75DUwKfaLki1fFmJ4V2U6JMPvNpv51b"],
      ["Tutorial 15", "1iUtwk3dNbwSHocETKX4CzaEgPGS2mAP4"],
      ["Tutorial 16", "15UENCsIcsuWd0pBR7KTEleJZ7SAN6uFH"],
      ["Tutorial 17", "16fkjjyQuwk55WBzgxQEQK2SqVeou6b8m"]
    ],
    practicals: [
      ["Practical 1", "1EMEY7ylg_9RWnT9dsTuuZVSKJgHmO_ri"],
      ["Practical 2", "19eiBJO_RB768X6IlVhUJNpgi4wUFpqlR"],
      ["Practical 3", "1ZxI5NMeWpN24rkBxjJv-wD5LHUT4Pev7"],
      ["Practical 4", "1qwxOXmKz-v11apJDpXcUnc3ZYvk4s7BM"],
      ["Practical 5", "1a2SFBKFPnWLOnhAcGhMeEcZ2Ak5aXf8E"],
      ["Practical 6", "1lYqZMYyEM7BgBplyoomavGyF33p0Ahej"],
      ["Practical 7", "12XV_KSblXb5SzwmJKHHGqxaAcfdktGCM"],
      ["Practical 8", "172e9ontOkcv1q2s2hRsToWXEEsJjHQUK"],
      ["Practical 9", "1OqEQ168VTLqkwuLjtS1OVjxnyJH-Ulnu"]
    ],
    prerecorded: "1m81CsjIJlyq_UNCy4ylplRbTb9W3xIFu",
    notes: [
      ["Bayan's Summaries", "1NtxVFYK3SctUhUDpy13l_Vis03Vuz7u6"],
      ["Jihad's Summaries", "1BCr-_KXl71n-f959YmAsOSPlsf7BykaZ"],
      ["Extra Notes", "1A7u7wW-RsspEIbUsMCQsA-JXsLC0YNA9"]
    ],
    flashcards: "1_CK40DShEoazzVId36frxOr8z9Sp48tm",
    qbank: [
      ["ICA 1", "1m5Gujxp_kJvIuRTnG65gy-vRGyrNVVMO"],
      ["ICA 2", "1lCC3ixpmuUQmE4LfevjG2ktuRRKyvbMb"],
      ["Spotter", "1meRx8FL3Tg3HP1cuT1JmeRPuyr869cpL"],
      ["Final", "1Y6R4_otOPHajYlY6ljyYUWgMbMMwavM8"],
      ["Extra Questions", "19-gfpk_8iVVKATpXp2bQctxEesixbM2-"]
    ]
  },
  integrated2: {
    cases: [
      ["Case 1: Vomiting", "161nEtILNmCPTRxfOn_h9niGb73gdP3Gr"],
      ["Case 2: Abdominal Pain", "1nqW2UVcZUv-jJprbKRJQSj7vHNx7gbB5"],
      ["Case 3: Hematuria", "1E9qZ-MSoxtyTk6es75vTYZfBx4rU_lzB"],
      ["Case 4: Failure to Thrive", "1VTOXqN5NiEKP4E2mkNgdTaqqlTLE67pj"],
      ["Case 5: Common Diseases of Pregnancy", "1PycmWG3nq_3tyublYlmAad3Q7pN1XhRg"],
      ["Case 6: Weight Loss", "15zwMeTR7ZgtKbu3ZJGK7-shlV1Wj0Ewl"]
    ],
    skillslab: "1NzfoDcGEP23ZO0JR1y-kAeBtrdCZnP_E",
    flashcards: "1-Z4hexmytO_JibA-wBHyKefxz-ANgbwt",
    qbank: [
      ["Quizzes", "1PvjwNIMUWdbTRvRNJTCy_ythSxx7XEof"],
      ["ICA", "1LK52nIo37OsU-8oLgDMVAwssiFFNbbip"],
      ["OSCE", "1aiPVV2uYkQcqihGUSjwBXpZYcWS2IrSE"],
      ["Final", "1TPhV6XDr7_wFsBjcz-Xi82LWgs9ddZPd"],
      ["Extra Questions", "17y_WBKr619O8tf6wYpL2LfjQYpSHdSCl"]
    ]
  },
  nutrition: {
    lectures: "1cXB_5KVK_P-rMAaBSPewZcwDGjNlVW-c",
    tutorials: [
      ["Tutorial 1", "1UhGi4g4i3UM04Ft2yi2pkqTVsOn_tYeP"],
      ["Tutorial 2", "1fbY1bTJqEemF3ToslSWevt6XJIIkv4aF"],
      ["Tutorial 3", "1E13NZz9OSKtOTqi5Ka4j6A4jZYkmnqz3"],
      ["Tutorial 4", "1RkiAmjaLJUG2JxNg-w2jgJ56oOc9tV-9"],
      ["Tutorial 5", "1S7WJKdj9DauU1u64GjIYVHdOteMVPilE"],
      ["Tutorial 6", "1XrfAEofnE52GDPJx-hzKp8Rhga5A-5UB"],
      ["Tutorial 7", "1KZ6gL9XqfRaeEGAlnNiBNxaalhj7BzGz"],
      ["Tutorial 8", "1Cow8x3fP_V0qgtrI0tB50XzEJoarcTCa"],
      ["Tutorial 9", "1ySeVYnUH9GQcEpzYn4W8CUrSt8Mizaw_"],
      ["Tutorial 10", "1sp8BjO6pmoiiDTOx4uGZuDUDAdv7IK9j"],
      ["Tutorial 11", "1rcDmi2fB8TThrRyHElgbbvYVafRvuTvp"],
      ["Tutorial 12", "1oFtegF08gTgaSoEoONuXXKswQM_6pG1O"],
      ["Tutorial 13", "1ZPUYCprAQUgm5nzrLgG3lUCGHKe-gtXr"],
      ["Tutorial 14", "12Yx44Brq6p-L-0kGUrhZEUdS6gD_h9tf"]
    ],
    prerecorded: "14fmviZuHnBbiQjwo8lAuttAel7bVfC4_",
    notes: [
      ["Bayan's Summaries", "10FSHWaiHgXzbmWNasyda8JfuXBGrfNh1"],
      ["Jihad's Summaries", "1lm7swAW1Omu5-USpNgrjjx6YQ0rAJzuI"],
      ["Extra Notes", "19EspxwLd0y9Iz2ug9wwrtpFYQAarIY9e"]
    ],
    flashcards: "1n-YhpCTU5tipHrK3ZZyvYXAa85g7w8pk",
    qbank: [
      ["ICA", "1RoZUxlWI0vrUiW-NokzIVCB_1mo5oDCo"],
      ["Final", "1qbNmWuBQH-uoavhx1b1hF9bd1O7iiN7d"],
      ["Extra Questions", "1JNCl4h6_GqcONORmIP-1cjxgFqEJQpIR"]
    ]
  },
  project1: {
    lectures: "1RunV53WEqNb8zxpg4oSGrFf-yACf1N1l",
    presentations: "1SpCwYcv51I2qvj9aKVBmw3HIKh-aXlUs",
    notes: "1swoj5ds2jG8FlPv8VW11m11LEtsFjSMh"
  },

  hns: {
    lectures: "1Uql0jklcEU_iUD-mdX9tz5VQqIxP5Fg0",
    tutorials: [
      ["Tutorial 4", "1MUv4ov00uy-14Me_NJtgifhfZ63wYgbQ"],
      ["Tutorial 10", "1VBjIUYSQVPjLHZdwKijl5VarQ7M5ptYU"],
      ["Tutorial 11", "1Wm73HcQDF-wafgCmxJ4cLP6wWxDwha8J"],
      ["Tutorial 13", "1OFLTe__ggPegvFRZLA0ZEwzXPrKlcneC"],
      ["Tutorial 14", "1tSGcxeR1XWkBXEQ9T3LXvplnxs8QcjD4"]
    ],
    practicals: [
      ["Practical 1", "1JOGsZqQmcJarqse1uHN7v1Svm2cNCmjS"],
      ["Practical 2", "1UoTNruci6o3KIlk_MwVCp786B0CwlI8T"],
      ["Practical 3", "1UpIRGvAPyc0zQ2j7TXQljA9baSUsd_Eq"],
      ["Practical 4", "1m50QqWs5M1Lg4KT2I5DPNdglSsol3SVY"],
      ["Practical 5", "1EoB4EuMROqzlcJ5S7MrR-2HzQFk6e1Er"],
      ["Practical 6", "1j0bF959lJFzn8IBIz-9MMYrXdvL-FTHB"],
      ["Practical 7", "1WKM8ZHTDZW34NJyGC68FXHfL6Z_5XjCR"],
      ["Practical 8", "1cn8FA9Y0R42DBtwJfas4AJ-Jkv3AGjJX"],
      ["Practical 9", "1aFmp6DLfPU9DIHInlNdSjQZrNhCUNxgh"],
      ["Practical 10", "1Pba1Qf0u_KrSwB5PMv859RThJgHMspt9"],
      ["Practical 11", "1J3EppLpaAF_dtCjnN4YNpg4hM1vds0Cs"],
      ["Practical 12", "17pLXkXsoXmxlCGqJqVxaZYoqyxM2vA3r"]
    ],
    prerecorded: "1dWidj-DDZu8JRlTh0lZsdOa4-qVHZLVF",
    cases: [
      ["Case 1", "1IKXKIbhlOe78w5OibvXcIClfgZGWV7h9"],
      ["Case 2", "14QEzRL2x43ajE_WjdJqGzWXi1kHyqgWx"],
      ["Case 3", "1J0ZDZywO5H990HAxS4YPp1n27_hD9kBS"],
      ["Case 4", "1wxBPB2-O4Yyp2sfxBGuSGAgLmS-8EFco"],
      ["Case 5", "12Khg1dxG8OCT2zmIykR6ry6yhbc7UmE-"],
      ["Case 6", "1GI9dUrx-DIAy-Dhr9omVYRuY4pPrkbJk"],
      ["Case 7", "1CnaLuVirdhG_CjMj4rTiJ-zBkH4M7y_U"],
      ["Case 8", "1YnFuJ_RoyCjAURQ1PyeDC1q5Fl5qH8Hc"],
      ["Case 9", "1xYAsTmD33Cy6c7HkjHVUXslkuoSOzEuo"]
    ],
    notes: [
      ["Bayan's Summaries", "1sfpMaoXjBlDBgxa7qFxB63GIUny5i7Wx"],
      ["Jihad's Summaries", "1_g-_UA9E8rxfZFzJSvani-hNGmr57ZAi"],
      ["Extra Notes", "14C_D9R44hHbGQJ2YYQmxMkP0G56vBtaY"]
    ],
    flashcards: "1NOxfKbZvFCl9c__QGMn6QXxkayB7WqtJ",
    qbank: [
      ["Clinical Cases", "19GLzRf3TLPICfFlVfAmBjEmLx-oxAy9A"],
      ["ICA 1", "1ij13mO7lLBgCgEXdyrT2ZbXDLG0qReqG"],
      ["ICA 2", "1zZVdeJtudUBelHyAycavLyNVaGHy_Wkn"],
      ["Spotter", "1Uj2K9yltmZlakVad2eqUagB8mw-5ItwT"],
      ["Final", "1LVdJndAcDvTMdvXEJsmjqlh4O6weWqYE"],
      ["Extra Questions", "1eoGcPOqTU2Q5XNTuWxONld6NMx-sez2k"]
    ]
  },
  endocrine: {
    lectures: "14Gfj0h26WyCF__YVPMY882WaUIdiWQuZ",
    tutorials: [
      ["Tutorial 1", "1xfVkjbnona7EBOx9BcffG_pIvul1KOOu"],
      ["Tutorial 2", "18UEtZ-V1vK837jIw84VhkJX7PK0du9cd"],
      ["Tutorial 3", "1I6bXj105AbH-5xUkVpzfG6Ty3ydP5MIw"],
      ["Tutorial 4", "1409fvGBAR5iJ471PfbXKH6RHy-wnPyUI"],
      ["Tutorial 5", "1w9wnd46cVlj9lvb-yqcOlftuWLgTqbBI"],
      ["Tutorial 6", "1NRSd1OeX2BPZpSR5E2IM3IbHQCB6gGFV"],
      ["Tutorial 7", "1iZayqZ5r-lBjOLssJMazs9OPRMiBbAB_"],
      ["Tutorial 8", "1JN97H_0dv2iQaZgoTyVjeNvj8chk5TQV"],
      ["Tutorial 9", "1GfFCaqG8dky4kM11-96Xf-_5umM-jZOu"],
      ["Tutorial 10", "1MK0PRG9fEd20XMwR_BjtKMBSOOklNPZk"],
      ["Tutorial 11", "10ZDozYJ-9lW7gg8_QM6mkxU5JbpvIZsV"]
    ],
    practicals: [
      ["Practical 1", "1h_-_WGRjqFa78J-uk86jMD24MvaW5LvE"],
      ["Practical 2", "1suWSnJ2vxa2FrR5Tiiwsk6l3sejdk_xn"],
      ["Practical 3", "154d9lO38cXJXl86Df8lqMneB4CJQrUET"]
    ],
    prerecorded: "1jh8kWSWKzTk6aO6n-hxQ9tETtgWvK9oi",
    notes: [
      ["Bayan's Summaries", "1XAdaCR9MxWJw4e7vAR0bN0uA4EIAaU7v"],
      ["Jihad's Summaries", "1J66P8Xk7kEBkmGk_Yie80CUxt21yCV74"],
      ["Extra Notes", "1d0esLTRsBrMPWs3btDViEN9sFr5q1urf"]
    ],
    flashcards: "1EoJHve-aZ7XM7ua0082I7q4u0IMUirpw",
    qbank: "1bBJwTT64B4i9F1b_E_qWJkvoZ2Ch3jK5",
  },
  integrated3: {
    cases: [
      ["Case 1: Fever", "1QL8kzQHIf48sBO21FEfEzzukmcy9vmrP"],
      ["Case 2: Headache", "1Gjd2k4ds4vHTZJlPulUxOZiqivL2vJb2"],
      ["Case 3: Joint Pain and Back Pain", "11txEQAyDuCsgW8mXoPAQb2dIWYvh5fQo"],
      ["Case 4: Neck Mass", "1AoJKYknrFz7GUZmMqNqYaKb_kYfBpsnl"],
      ["Case 5: Acute Weakness", "1iqmzuFYtrp3lv78ktHLZVH6V5TFtrpKl"],
      ["Case 6: Altered Sensorium", "1qAF8k-WgPHr-sU5k2C_PwQoz0BNCx4WH"]
    ],
    skillslab: "1al2KFD1j6hOYCNqNfpLLHxRjFN2EJDoo",
    flashcards: "1dOzbRL5ctc8tPoTX2l4l_MiEnSVkCYKT",
    qbank: [
      ["iRAT and tRAT", "12fvVDL0VGf8vY6Zk4VNtXdKUozJ0GFh8"],
      ["ICA", "1uj0FoOqX3zgJ5T_Pyq-MSzlxbWTV_PXu"],
      ["OSCE", "1Vd8dMvhmPd37YDy_MwKSLe6M0umvi7mB"],
      ["Final", "12fvVDL0VGf8vY6Zk4VNtXdKUozJ0GFh8"]
    ]
  },
  locomotor: {
    lectures: "18Y_W1pEAx1MjxXO4TgCChQkNt_jZW-rX",
    tutorials: [
      ["Tutorial 1", "17eQIPHm8LX8sKubB7z198Qyazf0L5E8K"],
      ["Tutorial 2", "17Xy7juSrfnsDNkUqDE2qCIfVlpVbbxFe"],
      ["Tutorial 3", "1xn3ybYn3oqt-_bolL6aj-6O2OJ6uXhfQ"],
      ["Tutorial 4", "171_vPL8W-iZ2LByAnasZQ9j8_8kmzdjX"],
      ["Tutorial 5", "1ch_H9FJqcn2KsUdKzlCdmyYVprMrLsG8"],
      ["Tutorial 6", "1Hk5D3SOWnrYgrN2TB2WFNSDBbZaNdCtf"],
      ["Tutorial 7", "11bPVDE85v6ghDekIr3uc2BrCCkg2CDuS"],
      ["Tutorial 8", "1ls-uxkd75po0e6OSh2tTdEe6XUlW1jNJ"],
      ["Tutorial 9", "10-1s05D9dYKki6hUMImYbgACWlHbqgkx"],
      ["Tutorial 10", "11fB3t1og17lH7NbmiVFSnrw0DZBXIAJ4"],
      ["Tutorial 11", "1aQW8Hrrm5Wb0jusnFzkoooyL7A91Ou8F"]
    ],
    practicals: [
      ["Practical 1", "1ajJa7jQ266doDA2QEo3M0QwtahAxOz4i"],
      ["Practical 2", "1E4FfWIyme9Tkch80l0U-0wyyNw7JisH9"],
      ["Practical 3", "1VG4PSvL3Y1eD0uOiyAuQB7AZ3UrtRh3R"]
    ],
    prerecorded: "1UAzrbolJXTUfCwFKvRiD8YQ_cFnVx2KF",
    notes: [
      ["Bayan's Summaries", "1zzNI3KgRuu5CPiPRucORfVMGLnDWFpNA"],
      ["Jihad's Summaries", "1tS9xh9Sm1BwQ-UW6Iwo1Mu_AzwazwHPT"],
      ["Extra Notes", "1SzdTMryVCZw_XIQPcOW1BwFKd4xw8zgr"]
    ],
    flashcards: "1VY4DQcn2eQ3eHkna38ld5GXAho-q2pVp",
    qbank: [
      ["ICA", "1z84YfxQcaTBCDkovPaPy7tdYxFxR8VlZ"],
      ["Spotter", "12DqA8LE2BFEPCPf4M2-Yn2h-AchSIbYs"],
      ["Final", "1qkwP0ojw7XLdN7gV1bgwEL1eM7lKAnj-"],
      ["Extra Questions", "1gY8KkDX4UlmJgxmC9uS9ons-EfAN9IJl"]
    ]
  },
  project2: {
    lectures: "1Yp7rtHMLovMWwWa70krE94q-OsuJaFdg",
    notes: "1O0FykIBv4PO1OfwLSnGPcdnWEitHbUg8"
  }
};
