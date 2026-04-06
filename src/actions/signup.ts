"use server";

import { supabase } from "@/lib/supabase";

export type SignupState = {
  success: boolean;
  error: string | null;
};

export async function submitSignup(
  _prevState: SignupState,
  formData: FormData
): Promise<SignupState> {
  const email = formData.get("email") as string;
  const brandName = formData.get("brand_name") as string;
  const industry = formData.get("industry") as string;
  const competitor1Name = formData.get("competitor_1_name") as string;
  const competitor1Website = formData.get("competitor_1_website") as string;
  const competitor1Linkedin =
    (formData.get("competitor_1_linkedin") as string) || null;
  const competitor2Name =
    (formData.get("competitor_2_name") as string) || null;
  const competitor2Website =
    (formData.get("competitor_2_website") as string) || null;
  const competitor2Linkedin =
    (formData.get("competitor_2_linkedin") as string) || null;
  const competitor3Name =
    (formData.get("competitor_3_name") as string) || null;
  const competitor3Website =
    (formData.get("competitor_3_website") as string) || null;
  const competitor3Linkedin =
    (formData.get("competitor_3_linkedin") as string) || null;
  const deliveryMethod = formData.get("delivery_method") as string;
  const telegramUsername =
    (formData.get("telegram_username") as string) || null;

  if (!email || !brandName || !industry || !competitor1Name || !competitor1Website) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const { error } = await supabase.from("signups").insert({
    email,
    brand_name: brandName,
    industry,
    competitor_1_name: competitor1Name,
    competitor_1_website: competitor1Website,
    competitor_1_linkedin: competitor1Linkedin,
    competitor_2_name: competitor2Name,
    competitor_2_website: competitor2Website,
    competitor_2_linkedin: competitor2Linkedin,
    competitor_3_name: competitor3Name,
    competitor_3_website: competitor3Website,
    competitor_3_linkedin: competitor3Linkedin,
    delivery_method: deliveryMethod || "email",
    telegram_username: telegramUsername,
  });

  if (error) {
    return { success: false, error: "Something went wrong. Try again?" };
  }

  return { success: true, error: null };
}
