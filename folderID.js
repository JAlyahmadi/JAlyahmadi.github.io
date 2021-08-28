// Google Drive folder IDs
var folderIDs = {
  chemistry: {
    lectures: "1oPVHZTu-0h6crTCI7w47poOmzz3j4xV0",
    notes: "1DU54tBxnpx_61tA6HVhBIUpLfDVk6Nha",
    qbank: "16mfqb68q7G2BdMEZDNW3TZaxq6Q67m52"
  },
  anatomy: {
    lectures: "15z20mqm0H83ZJ_VA9SCPmwzrC4nmo6UO",
    practicals: [
      ["Histology Program", "1g44VZdT3u1wAywtcuQv0MtLzYeoh9k1L"]
    ],
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
    notes: "1CRc9YGNTAEgH7yyQWJeKf9T3lZcqBCpy",
    flashcards: "1XHaGMLlYVs9-6gNcwCenyuf0bjovbqoa",
    qbank: [
      ["ICA 1", "1Mzu8fTXIEB-9Brj34LeQAEQNusKDR7Tc"],
      ["ICA 2", "1nT-V6PCH5_narSZGgg4uErerxBAqY0Et"],
      ["Final", "1Uc00G1fRqAQxDa8fNrvyJjiR32iIHNGl"],
      ["System-based Questions", "1w9unOVTQqSBbaup1C4HIS2Exyd1mFJuP"],
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
      ["Enzyme Questions", "1gPo9a4KLtjiY7QaOJlbCilPz-rTooZac"],
      ["Bioenergetics", "1BpBmzcr1AyduTYsfUYKiBOJhyko10FFA"],
      ["Carbohydrate Questions", "1fK6BAynS7nvbQyGBnoepEzX6ocjZfSJo"],
      ["Amino Acid Questions", "1fxmhxDumdCAKNBlWqp2MUcD5O8wr43tC"],
      ["ICA", "1e5SUymY_iM3WCUKZE5drUnodMkAfK-mn"],
      ["Open-book Exam", "1nILDCgU7812XvweZa0DbguTcOaRsDref"],
      ["Final", "1eFyR3P-cGNNLfbE_PxRsU7LsU-WLfU76"],
      ["Extra Questions", "1DkYjwZEAZMa-miEV6_jwlZAxDlZFP9Is"]
    ]
  },
  cytology: {
    lectures: "1B5ioEI1jp3eH9ndY011agaBHipdhv08k",
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
      ["Surface Anatomy", "1m2nRO3eKjL0FT5yViVbI9R-K1x3Jv6g0"],
      ["X-rays", "13OFLOdwDTtoTh__dycbwJxSRhlCpJ8IJ"]
    ],
    notes: "1-Mps0wDVmMuYgpVbz3FNMx-rpK1dLIKK",
    flashcards: "1-Mps0wDVmMuYgpVbz3FNMx-rpK1dLIKK",
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
    notes: "1QqJvTISJ5GmWgHnMaWr-6hit6MYcKitL",
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
    tutorials: "12OPFYlxWl9P-z5sby7GunLhpXGT20O4-",
    practicals: "14Mv51itVNxCBLwYK-BAYSdtsPiCX-xUV",
    notes: "1D8aK7LcUPxyu2kvpCLjLpBa59WTjA_cg",
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
    tutorials: "1Vhg0uvTlQUL9nMi8tAtMIDuAhChuUY--",
    practicals: "1BA6GEeyb1o9TGtsXmMXG630BlqjC7pWB",
    notes: "14tFoenrKduRU_ZA3b5rT5sHKyLINxbkF",
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
    lectures: "1Nrn3CfUghJ9oKx9VCIiOhwRy45gUfksK",
    cases: "1mY9ZG-LFYV8LAICT1PLSZ-AbjlD3pR4d",
    skillslab: "1NzfoDcGEP23ZO0JR1y-kAeBtrdCZnP_E",
    notes: "1Yf9i14UCrvIwU6lGxn07lI7NGDq1PnCJ",
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
    notes: "1BK-TchCjKNnZCt4k63xEEBrRcoF0TBUJ",
    qbank: [
      ["ICA", "1RoZUxlWI0vrUiW-NokzIVCB_1mo5oDCo"],
      ["Final", "1qbNmWuBQH-uoavhx1b1hF9bd1O7iiN7d"],
      ["Extra Questions", "1JNCl4h6_GqcONORmIP-1cjxgFqEJQpIR"]
    ]
  },
  project1: {
    lectures: "1RunV53WEqNb8zxpg4oSGrFf-yACf1N1l",
    notes: "1swoj5ds2jG8FlPv8VW11m11LEtsFjSMh"
  },

  hns: {},
  endocrine: {},
  integrated3: {},
  locomotor: {},
  project2: {},

  preclerkship: {},
  juniorclerkship: {},
  seniorclerkship: {},
  preinternship: {}
};

